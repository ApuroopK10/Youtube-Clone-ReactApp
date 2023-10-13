export const USER_ICON =
  "https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg";
export const BUTTON_LIST = [
  "All",
  "Football",
  "Music",
  "Podcasts",
  "Gaming",
  "Live",
  "Gadgets",
];
export const GOOGLE_API_KEY = "AIzaSyAg-M-x6FOB9KtChSu-6RB0ucmV2pRu88s";
export const YOUTUBE_VIDS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const NESTED_COMMENTS = [
  {
    name: "Apuroop",
    comment: "Lorem ipsum dolor set amesiufegs",
    replies: [],
  },
  {
    name: "Apuroop",
    comment: "Lorem ipsum dolor set amesiufegs",
    replies: [
      {
        name: "Apuroop",
        comment: "Lorem ipsum dolor set amesiufegs",
        replies: [
          {
            name: "Apuroop",
            comment: "Lorem ipsum dolor set amesiufegs",
            replies: [],
          },
        ],
      },
      {
        name: "Apuroop",
        comment: "Lorem ipsum dolor set amesiufegs",
        replies: [
          {
            name: "Apuroop",
            comment: "Lorem ipsum dolor set amesiufegs",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Apuroop",
    comment: "Lorem ipsum dolor set amesiufegs",
    replies: [
      {
        name: "Apuroop",
        comment: "Lorem ipsum dolor set amesiufegs",
        replies: [
          {
            name: "Apuroop",
            comment: "Lorem ipsum dolor set amesiufegs",
            replies: [],
          },
          {
            name: "Apuroop",
            comment: "Lorem ipsum dolor set amesiufegs",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Apuroop",
    comment: "Lorem ipsum dolor set amesiufegs",
    replies: [],
  },
];
export const CHAT_OFFSET_CLEAR = 10;
export const SEARCH_VIDEOS =
  // "https://www.youtube.com/youtubei/v1/search?key=" +
  // GOOGLE_API_KEY +
  // "&prettyPrint=false";
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q={query}&type=video&key=" +
  GOOGLE_API_KEY;
export const CHANNEL_LIST =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";
