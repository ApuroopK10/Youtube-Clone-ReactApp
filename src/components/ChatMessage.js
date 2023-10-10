import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img alt="user-icon" className="h-8 rounded-lg" src={USER_ICON} />
      <div className="m-2 p-2 text-sm">
        <span className="text-gray-500 mr-2">{name}</span>
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
