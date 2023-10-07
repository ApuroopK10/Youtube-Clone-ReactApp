import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { toggleMenu } = useSelector((store) => store.app);
  if (!toggleMenu) return null;
  return (
    <div className="p-5 shadow-lg col-span-1">
      <h1>Home</h1>
      <h1>Shorts</h1>
      <h1>Subscriptions</h1>
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">More from YouTube</h1>
      <ul>
        <li>Youtube Premium</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
    </div>
  );
};

export default SideBar;
