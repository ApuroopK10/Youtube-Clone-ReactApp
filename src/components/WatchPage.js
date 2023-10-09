import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuManually } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(toggleMenuManually(false));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-6">
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
