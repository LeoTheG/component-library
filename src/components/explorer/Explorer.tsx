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
import { MenuItem, Menu, Tooltip } from "@material-ui/core";
import { sites } from "../../types";
import "./Explorer.css";
import { songData, ISong } from "../../types/musicData";
import { MusicController } from "../musicController/MusicController";

declare let web3: any;
declare let ethereum: any;
declare let Web3: any;
declare let window: any;

const sitesToUrl: { [key: string]: string } = {
  [sites.dunkonyou]: "http://13.56.180.100/",
  [sites.ginandjuice]: "http://52.53.173.93/",
  [sites.jolene]: "http://54.177.174.215/",
  [sites.sonnet18]: "http://13.57.47.139/",
  [sites.leaderboard]: "http://3.101.78.197/",
};

const songArr = Object.values(songData);

const siteOrder = Object.values(sites);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    asdfasdfasdfasdf: {
      padding: "0!important",
    },
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
  site: string;
  style?: React.CSSProperties;
}

export const Explorer = (props: IExplorerProps) => {
  const classes = useStyles();
  const [isConnectedMetamask, setIsConnectedMetamask] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [prevSite, setPrevSite] = useState("");
  const [nextSite, setNextSite] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [songPlayingIndex, setSongPlayingIndex] = useState(0);
  const song = songArr[songPlayingIndex];
  const [audio, setAudio] = useState(new window.Audio(song.url));

  const onEndAudio = () => {
    onClickNextSong();
  };

  useEffect(() => {
    const { prev, next } = getPrevNextSites();
    setPrevSite(prev);
    setNextSite(next);
    audio.addEventListener("ended", onEndAudio);
    return () => onEndAudio;
  }, []);

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

  const onClick = (isNext: boolean) => () => {
    if (isNext) {
      window.open(nextSite);
    } else {
      window.open(prevSite);
    }
  };

  const getPrevNextSites = (): { prev: string; next: string } => {
    const siteEntries = Object.entries(sites);

    const siteIndex = siteEntries.findIndex(([key, value]) => {
      return value === props.site;
    });

    let prevIndex = siteIndex - 1;
    let nextIndex = siteIndex + 1;

    if (prevIndex < 0) {
      prevIndex = siteEntries.length - 1;
    }

    if (nextIndex >= siteEntries.length) {
      nextIndex = 0;
    }
    return {
      prev: sitesToUrl[siteEntries[prevIndex][1]],
      next: sitesToUrl[siteEntries[nextIndex][1]],
    };
  };

  const onClickSite = (site: string) => () => {
    window.open(sitesToUrl[site]);
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

  const onClickPrevSong = () => {
    let newSongIndex = songPlayingIndex - 1;
    if (newSongIndex < 0) {
      newSongIndex = songArr.length - 1;
    }
    setSongPlayingIndex(newSongIndex);
  };
  const onClickNextSong = () => {
    let newSongIndex = songPlayingIndex + 1;
    if (newSongIndex >= songArr.length) {
      newSongIndex = 0;
    }
    setSongPlayingIndex(newSongIndex);
  };

  const onTogglePlaySong = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    }
    if (!isPlaying) {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audio.src = songArr[songPlayingIndex].url;
      audio.play();
    }
  }, [songPlayingIndex]);

  return (
    <div className="explorer-container">
      <AppBar style={{ ...props.style }} position="static">
        <Toolbar
          className="flex-col"
          style={{
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: "5px 0",
          }}
        >
          <div
            className="flex-row"
            style={{
              justifyContent: "space-around",
              width: "100%",

              alignItems: "center",
            }}
          >
            <Tooltip title="Connect to metamask">
              <IconButton
                onClick={!isConnectedMetamask ? connectMetamask : undefined}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <img className={classes.img} src={imageMetamask} />
              </IconButton>
            </Tooltip>
            {balance && <div>{balance.substring(0, 6)} ETH</div>}

            <SiteNavigation
              site={props.site}
              onClickSitesButton={handleClickSitesButton}
              onClickPrev={onClick(false)}
              onClickNext={onClick(true)}
            />
          </div>
          <MusicController
            isPlaying={isPlaying}
            onClickPrev={onClickPrevSong}
            onClickNext={onClickNextSong}
            onTogglePlay={onTogglePlaySong}
            song={songArr[songPlayingIndex]}
          />
        </Toolbar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseSites}
        >
          {siteOrder.map((site) => {
            return <MenuItem onClick={onClickSite(site)}>{site}</MenuItem>;
          })}
        </Menu>
      </AppBar>
    </div>
  );
};

interface ISiteNavigationProps {
  onClickSitesButton: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  site: string;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const SiteNavigation = (props: ISiteNavigationProps) => {
  return (
    // todo figure out how to automate this, cant set env variable thru npx styleguidist server
    <Tooltip title={"Explorer version: 0.0.23"}>
      <div
        style={{
          maxWidth: 250,
          display: "flex",
        }}
      >
        <IconButton onClick={props.onClickPrev} style={{ color: "white" }}>
          <NavigateBeforeIcon />
        </IconButton>

        <Button variant="contained" onClick={props.onClickSitesButton}>
          {props.site}
        </Button>

        <IconButton onClick={props.onClickNext} style={{ color: "white" }}>
          <NavigateNextIcon />
        </IconButton>
      </div>
    </Tooltip>
  );
};
