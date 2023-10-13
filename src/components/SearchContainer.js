import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { useEffect, useState } from "react";
import {
  CHANNEL_LIST,
  GOOGLE_API_KEY,
  SEARCH_VIDEOS,
} from "../utils/constants";

const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  const [videoResults, setVideoResults] = useState([]);
  const [channelResults, setChannelResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchVideoList();
  }, [location]);

  const fetchVideoList = async () => {
    const response = await fetch(
      SEARCH_VIDEOS.replace("{query}", searchParams.get("searchQuery"))
    );
    const data = await response.json();
    setVideoResults(data.items);
    fetchChannelData(data.items);
  };

  const fetchChannelData = async (videoResults) => {
    if (!videoResults || videoResults.length === 0) return;
    const idList =
      "&id=" +
      videoResults
        .map((vid) => vid.snippet.channelId)
        .reduce((vid1, vid2) => (vid1 += "&id=" + vid2));
    const response = await fetch(
      CHANNEL_LIST + idList + "&key=" + GOOGLE_API_KEY
    );
    const data = await response.json();
    setChannelResults(data?.items);
  };

  return (
    <div className="w-3/4 p-6">
      {videoResults?.map((video, idx) => (
        <Link to={"/watch?v=" + video?.id?.videoId} key={video?.id + idx}>
          <SearchVideoCard videoCard={video} channelResults={channelResults} />
        </Link>
      ))}
    </div>
  );
};

export default SearchContainer;
