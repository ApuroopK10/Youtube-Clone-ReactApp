import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearChat } from "../utils/chatSlice";
import { generateRandomChatMessage } from "../utils/helper";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addMessage(generateRandomChatMessage()));
    }, 15000);

    return () => {
      clearTimeout(timer);
      dispatch(clearChat());
    };
  }, []);
  const { chatMessages } = useSelector((store) => store.chat);
  const submitChat = (e) => {
    dispatch(
      addMessage({
        name: "Anonymous",
        message: chatMessage,
      })
    );
    setChatMessage("");
    e.preventDefault();
  };
  return (
    <>
      <div className="ml-2 border border-black w-1/3 bg-white rounded-md">
        <div className="text-gray-500 p-2 border-b border-black w-full">
          Live Chat
        </div>
        <div className="h-[410px] overflow-y-auto p-2 flex flex-col-reverse">
          {chatMessages.map((chatMsg, index) => (
            <ChatMessage
              key={index}
              name={chatMsg.name}
              message={chatMsg.message}
            />
          ))}
        </div>
        <form className="p-3 border border-t-black" onSubmit={submitChat}>
          <input
            type="text"
            className="border border-black p-1 w-2/3"
            placeholder="Type comment to Submit"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          {
            <button
              className={
                "px-2 py-1 ml-2 rounded-md " +
                (chatMessage.length > 0
                  ? " bg-green-400"
                  : "pointer-events-none text-gray-100 bg-gray-600")
              }
            >
              Add Comment
            </button>
          }
        </form>
      </div>
    </>
  );
};

export default LiveChat;
