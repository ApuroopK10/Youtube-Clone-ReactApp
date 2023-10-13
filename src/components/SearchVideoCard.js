const SearchVideoCard = ({ videoCard, channelResults }) => {
  const { snippet } = videoCard;
  const {
    channelTitle,
    channelId,
    thumbnails,
    title,
    publishTime,
    description,
  } = snippet;
  const channelCard = channelResults?.find(
    (channel) => channel.id === channelId
  );

  return (
    <div className="flex my-4">
      <img
        src={thumbnails?.medium?.url}
        alt="video-thumbnail"
        className="rounded-xl"
      />
      <div className="px-4">
        <h1 className="font-medium text-gray-800">{title}</h1>
        <p className="my-2 text-xs text-gray-600">{publishTime}</p>
        <img
          src={channelCard?.snippet?.thumbnails?.medium?.url}
          alt="channel-icon"
          className="w-8 h-8 rounded-2xl inline"
        />
        <p className="inline-block text-xs text-gray-700 px-2">
          {channelTitle}
        </p>
        <p className="my-3 text-xs text-gray-700 px-2">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
