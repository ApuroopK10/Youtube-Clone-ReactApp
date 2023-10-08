const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="shadow-md m-3 w-80">
      <img
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-lg mb-3"
      />
      <div className="grid grid-flow-col pr-2">
        <div className="mt-1">
          <img
            alt="channel-pic"
            src={thumbnails?.default?.url}
            className="w-9 h-9"
          />
        </div>
        <div className="flex flex-col ml-3">
          <h1 className="font-medium text-gray-900 text-lg">{title}</h1>
          <p className="text-gray-600 text-sm font-medium">{channelTitle}</p>
          <label className="text-gray-600 text-sm font-medium">
            {statistics?.viewCount} Views • {snippet?.publishedAt}
          </label>
          <label></label>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
