import React, { useState, useCallback, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
const imageMetamask = require("public/metamask.png");
import BigNumber from "bignumber.js";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { MenuItem, Menu } from "@material-ui/core";
import { sites } from "../../types";

declare let web3: any;
declare let ethereum: any;
declare let Web3: any;
declare let window: any;

const siteorder = Object.values(sites);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    img: {
      width: 50,
    },
  })
);

interface IExplorerProps {
  site: sites;
}

export const Explorer = (props: IExplorerProps) => {
  const classes = useStyles();
  const [isConnectedMetamask, setIsConnectedMetamask] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (userAddress) {
      web3.eth.getBalance(userAddress, function (err: any, res: any) {
        if (err) console.log(err);
        const bal = new BigNumber(web3.fromWei(res, "ether")).toString();
        setBalance(bal);
      });
    }
  }, [userAddress]);

  const handleClickSitesButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSites = () => {
    setAnchorEl(null);
  };

  const connectMetamask = useCallback(async () => {
    try {
      if (ethereum) {
        web3 = new Web3(ethereum);
        try {
          await ethereum.enable();

          web3.eth.getAccounts((err: string, accounts: string[]) => {
            if (err) console.log(err);
            else if (!accounts.length)
              window.alert("No Metamask accounts found");
            else {
              setUserAddress(accounts[0]);
              setIsConnectedMetamask(true);
            }
          });
        } catch (e) {
          console.error("Error, ", e);
        }
      }
    } catch (e) {
      console.log("error", e);
    }
  }, []);

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* {isConnectedMetamask && <div>Balance: {balance} </div>} */}
        {!isConnectedMetamask && (
          <IconButton
            onClick={connectMetamask}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img className={classes.img} src={imageMetamask} />
          </IconButton>
        )}
        {balance && <div>{balance} ETH</div>}
        <SiteNavigation
          site={props.site}
          onClickSites={handleClickSitesButton}
        />
      </Toolbar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseSites}
      >
        {siteorder.map((site) => {
          return <MenuItem>{site}</MenuItem>;
        })}
      </Menu>
    </AppBar>
  );
};

interface ISiteNavigationProps {
  onClickSites: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  site: sites;
}

const SiteNavigation = (props: ISiteNavigationProps) => {
  return (
    <div
      style={{
        maxWidth: 250,
        display: "flex",
      }}
    >
      <IconButton style={{ color: "white" }}>
        <NavigateBeforeIcon />
      </IconButton>

      <Button variant="contained" onClick={props.onClickSites}>
        {props.site}
      </Button>

      <IconButton style={{ color: "white" }}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};
