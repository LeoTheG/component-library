export interface ISong {
  url: string;
  songName: string;
  artist: string;
}

export const songData: {
  [songName: string]: ISong;
} = {
  "we used to talk every night": {
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song1.mp3",
    songName: "we used to talk every night",
    artist: "elijah who",
  },

  "Be Mine": {
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song2.mp3",
    songName: "Be Mine",
    artist: "Jazzinuf",
  },
  "feelin' fine": {
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song3.mp3",
    songName: "feelin' fine",
    artist: "elijah who",
  },

  "Thunderbolt 404": {
    songName: "Thunderbolt 404",
    artist: "letsruntrack",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song4.mp3",
  },

  blue: {
    songName: "blue",
    artist: "jinsang x l o k a",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song5.mp3",
  },
  "Silent Thoughts": {
    songName: "Silent Thoughts",
    artist: "GentleBeatz ",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song6.mp3",
  },
  Return: {
    songName: "Return",
    artist: "Mingu5",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song7.mp3",
  },
  "put me back in my dream": {
    songName: "put me back in my dream",
    artist: "DOMINANT",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song8.mp3",
  },
  "Moonlit Metro": {
    songName: "Moonlit Metro",
    artist: "Cantrip",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song9.mp3",
  },

  "venice venture": {
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song10.mp3",
    songName: "venice venture",
    artist: "big wild",
  },
  // 11 12 13 unnamed
  "penthouse suite": {
    songName: "penthouse suite",
    artist: "bonus points",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song14.mp3",
  },
  "dejitaru glow": {
    songName: "dejitaru glow",
    artist: "a.l.i.s.o.n, crystal cola",
    url:
      "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song15.mp3",
  },
};

// const oldSongData = [
//   {
//     songName: "venice venture",
//     artist: "big wild",
//     tokenImage:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/token-images/token1.png",
//     audio:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song10.mp3",
//     bgPic:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg1.png",
//     bgGif:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg10.png",
//   },
//   {
//     songName: "we used to talk every night",
//     artist: "elijah who",
//     tokenImage:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/token-images/token2.png",
//     audio:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song1.mp3",
//     bgPic:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg2.png",
//     bgGif:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bggifs/bg1.gif",
//   },
//   {
//     songName: "penthouse suite",
//     artist: "bonus points",
//     tokenImage:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/token-images/token5.png",
//     audio:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song14.mp3",
//     bgPic:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg5.png",
//     bgGif:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg14.png",
//   },
//   {
//     songName: "dejitaru glow",
//     artist: "a.l.i.s.o.n, crystal cola",
//     tokenImage:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/token-images/token1.png",
//     audio:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song15.mp3",
//     bgPic:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg1.png",
//     bgGif:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg15.png",
//   },
//   {
//     songName: "Thunderbolt 404",
//     artist: "letsruntrack",
//     tokenImage:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/token-images/token5.png",
//     audio:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/audio/song4.mp3",
//     bgPic:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bgpics/bg5.png",
//     bgGif:
//       "https://token-metadata.s3-us-west-1.amazonaws.com/SS2/images/bggifs/bg4.gif",
//   },
// ];
