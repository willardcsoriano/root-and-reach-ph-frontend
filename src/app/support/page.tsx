"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Send, MessageSquare } from 'lucide-react';

// --- TYPE DEFINITIONS ---
type Message = {
    id: number;
    text: string;
    timestamp: string;
    sender: 'user' | 'farmer';
};

type Conversation = {
    id: number;
    farmerName: string;
    farmerImage: string;
    messages: Message[];
};

// --- MOCK DATA ---
const mockConversations: Conversation[] = [
    {
        id: 1,
        farmerName: 'Mang Juan dela Cruz',
        farmerImage: 'https://images.pexels.com/photos/6603099/pexels-photo-6603099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        messages: [
            { id: 1, text: "Hi Mang Juan! Just wanted to check on my order #RNR-10598. Everything looks great!", sender: 'user', timestamp: '10:30 AM' },
            { id: 2, text: "Hello! Yes, your order is packed and ready. Our driver will be heading out soon.", sender: 'farmer', timestamp: '10:31 AM' },
            { id: 3, text: "Great, thanks for the update!", sender: 'user', timestamp: '10:32 AM' },
        ]
    },
    {
        id: 2,
        farmerName: 'Eleanor Green',
        farmerImage: 'https://images.pexels.com/photos/4207783/pexels-photo-4207783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        messages: [
            { id: 1, text: "Hi Eleanor, the tomatoes from my last order were amazing!", sender: 'user', timestamp: 'Yesterday' },
            { id: 2, text: "I'm so glad you enjoyed them! Thanks for your support.", sender: 'farmer', timestamp: 'Yesterday' },
        ]
    },
     {
        id: 3,
        farmerName: 'Samuel Reyes',
        farmerImage: 'https://images.pexels.com/photos/5921808/pexels-photo-5921808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        messages: [
            { id: 1, text: "Good day! When will your Arabica coffee beans be back in stock?", sender: 'user', timestamp: 'June 29, 2025' },
        ]
    }
];


// --- MAIN SUPPORT PAGE COMPONENT ---
const SupportPage = () => {
    const [activeConversationId, setActiveConversationId] = useState<number | null>(1);
    const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const activeConversation = conversations.find(c => c.id === activeConversationId);

    // Effect to scroll to the bottom of the chat on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [activeConversation?.messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeConversation) return;

        const userMessage: Message = {
            id: Date.now(),
            text: newMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        // Update the state with the new message
        const updatedConversations = conversations.map(convo => 
            convo.id === activeConversationId
                ? { ...convo, messages: [...convo.messages, userMessage] }
                : convo
        );
        setConversations(updatedConversations);
        setNewMessage('');

        // Simulate a reply from the farmer
        setTimeout(() => {
            const farmerReply: Message = {
                id: Date.now() + 1,
                text: "Thanks for your message! I'll get back to you shortly.",
                sender: 'farmer',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            const finalConversations = updatedConversations.map(convo => 
                convo.id === activeConversationId
                    ? { ...convo, messages: [...convo.messages, farmerReply] }
                    : convo
            );
            setConversations(finalConversations);
        }, 1500);
    };

    return (
        <div className="container mx-auto p-4 h-[calc(100vh-80px)]">
            <div className="grid grid-cols-1 md:grid-cols-4 h-full border bg-white rounded-xl shadow-lg">
                
                {/* Left Panel: Conversation List */}
                <div className="col-span-1 border-r flex flex-col">
                    <div className="p-4 border-b">
                        <h2 className="text-xl font-bold">Conversations</h2>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        {conversations.map(convo => (
                            <div key={convo.id} onClick={() => setActiveConversationId(convo.id)}
                                className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-100 ${activeConversationId === convo.id ? 'bg-green-50' : ''}`}>
                                <Image src={convo.farmerImage} alt={convo.farmerName} width={48} height={48} className="rounded-full object-cover" />
                                <div className="flex-grow truncate">
                                    <p className="font-semibold">{convo.farmerName}</p>
                                    <p className="text-sm text-gray-500 truncate">{convo.messages[convo.messages.length - 1].text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Chat Window */}
                <div className="col-span-1 md:col-span-3 flex flex-col h-full">
                    {activeConversation ? (
                        <>
                            <div className="p-4 border-b flex items-center gap-4">
                                <Image src={activeConversation.farmerImage} alt={activeConversation.farmerName} width={40} height={40} className="rounded-full object-cover" />
                                <h3 className="text-lg font-bold">{activeConversation.farmerName}</h3>
                            </div>
                            <div className="flex-grow p-6 overflow-y-auto bg-gray-50">
                                <div className="space-y-4">
                                    {activeConversation.messages.map(msg => (
                                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-green-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow-sm'}`}>
                                                <p>{msg.text}</p>
                                                <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-green-200' : 'text-gray-400'}`}>{msg.timestamp}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                            <div className="p-4 bg-white border-t">
                                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                    <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-grow border-gray-300 rounded-full py-2 px-4 focus:ring-green-500 focus:border-green-500" />
                                    <button type="submit" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                                        <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                           <MessageSquare size={48}/>
                           <p className="mt-4 text-lg">Select a conversation to start chatting.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SupportPage;