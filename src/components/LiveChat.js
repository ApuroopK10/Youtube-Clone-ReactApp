import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomChatMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addMessage(generateRandomChatMessage()));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const { chatMessages } = useSelector((store) => store.chat);
  return (
    <div className="ml-2 border border-black w-1/3 bg-white rounded-md">
      <div className="text-gray-500 p-2 border-b border-black w-full">
        Live Chat
      </div>
      <div className="h-[410px] overflow-y-auto p-2 flex flex-col-reverse">
        {chatMessages.map((chatMsg, index) => (
          <>
            <ChatMessage
              key={index}
              name={chatMsg.name}
              message={chatMsg.message}
            />
            <span> {index}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
