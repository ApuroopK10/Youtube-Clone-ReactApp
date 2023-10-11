export const generateRandomChatMessage = () => {
  const names = ["John", "Alice", "Bob", "Emma", "Charlie"];
  const messages = [
    "Heyo what up?",
    "How's it going?",
    "What's on your mind?",
    "Nice weather today!",
    "Any plans for the weekend?",
  ];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
  };
};
