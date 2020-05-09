import React, { useState, useCallback, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
// import imageMetamask from "../public/metmask.png";
const imageMetamask = require("../public/metamask.png");

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

declare let web3: any;
declare let ethereum: any;
declare let Web3: any;
declare let window: any;

export const Explorer = (props: {}) => {
  const classes = useStyles();
  const [isConnectedMetamask, setIsConnectedMetamask] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (userAddress) {
      console.log("ua = ", userAddress);
      web3.eth.getBalance(userAddress, function (err: any, res: any) {
        console.log(err);
        console.log(res);
        console.log(web3.fromWei(res.c[1], "ether"));
        //             console.log('bal is', bal)
        //             console.log(a)
        // setBalance(bal)
      });
    }
  }, [userAddress]);

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
      <Toolbar>
        {/* {isConnectedMetamask && <div>Balance: {balance} </div>} */}
        {!isConnectedMetamask && (
          <IconButton
            onClick={connectMetamask}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <img className={classes.img} src={"/metamask.png"} /> */}
            <img className={classes.img} src={imageMetamask} />
          </IconButton>
        )}
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};
