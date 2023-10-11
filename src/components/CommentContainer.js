import React from "react";
import { NESTED_COMMENTS, USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-3">
      <img src={USER_ICON} alt="comment-icon" className="w-12 h-12" />
      <div className="px-3">
        <p className="font-medium">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, idx) => (
    <div key={idx}>
      <Comment data={comment} />
      {comment?.replies?.length > 0 && (
        <div className="ml-5 pl-5 border border-l-black">
          <CommentList comments={comment?.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2 mt-0">
      <h1 className="font-bold text-xl">Comments:</h1>
      <CommentList comments={NESTED_COMMENTS} />
    </div>
  );
};

export default CommentContainer;
