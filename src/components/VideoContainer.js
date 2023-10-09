import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_VIDS_API);
    const data = await response.json();
    setVideos(data.items);
  };

  if (videos.length === 0) return null;

  return (
    <div className="py-4 flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id} key={video?.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
