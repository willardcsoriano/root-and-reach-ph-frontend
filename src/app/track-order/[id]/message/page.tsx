"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Send, ArrowLeft } from "lucide-react";

const MessageDriverPage = () => {
  const { id: orderId } = useParams() as { id: string };
  const [messages, setMessages] = useState([
    { from: "driver", text: `Hi! I'm on my way with your order #${orderId}.` },
    { from: "driver", text: "I should be there in about 40 minutes." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { from: "user", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex items-center gap-4 sticky top-0 z-10">
        <Link
          href={`/track-order/${orderId}`}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="font-bold text-lg">Your Driver</h1>
          <p className="text-sm text-green-600">Online</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-6 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.from === "user" ? "bg-green-600 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none"}`}
            >
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSendMessage}
        className="bg-white p-4 flex items-center gap-2 border-t sticky bottom-0"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
        >
          <Send size={24} />
        </button>
      </form>
    </div>
  );
};

export default MessageDriverPage;
