import React, { useState } from "react";
import "./index.css"; // Import the CSS file

function SimpleChatBot() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const predefinedResponses = {
    hello: "Hi sparkle by name how can i help!",
    "how are you": "I'm doing well, thank you for asking!",
    "what is your name": "I am sparkle a simple chatbot.",
    bye: "Goodbye! Have a great day!",
    default: "Sorry, I don't understand that. Please try a different question.",
  }; //predefined possible responses by bot to user

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setChatLog([...chatLog, { text: inputText, isUser: true }]);
      const lowerInput = inputText.toLowerCase(); //change customer chats to lower case
      const response =
        predefinedResponses[lowerInput] || predefinedResponses["default"];
      setTimeout(() => {
        setChatLog([...chatLog, { text: response, isUser: false }]);
      }, 500);
      setInputText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }; //the enter key on the keyboard send message by user

  return (
    <div className="chatbot-container">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          className="chat-input"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="hello how can sparkle help..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default SimpleChatBot;
