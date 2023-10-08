import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { toggleMenuManually } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenuManually(true));
  }, []);
  return (
    <div className="col-span-11 p-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
