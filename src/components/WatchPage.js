import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuManually } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(toggleMenuManually(false));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-6 pb-0 w-full">
        <iframe
          width="900"
          className="w-2/3"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <div className="">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
