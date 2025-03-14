"use client";

import { useEffect, useRef, useState } from "react";
import { AccessCodeForm } from "~~/components/AccessCodeForm";
import { Button } from "~~/components/ui/button";
import { Card, CardContent } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { isAuthenticated } from "~~/utils/auth";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsAuthorized(isAuthenticated());
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: message }]);

    // TODO: Add actual API call to LLM here
    // For now, just echo back a response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "This is a placeholder response. The actual LLM integration will be implemented here.",
        },
      ]);
    }, 1000);

    setMessage("");
  };

  if (!isAuthorized) {
    return <AccessCodeForm onSuccess={() => setIsAuthorized(true)} />;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] p-4">
      <Card className="flex flex-col flex-1 max-w-4xl mx-auto w-full">
        <CardContent className="flex flex-col flex-1 p-4 gap-4">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-lg p-3 break-words ${
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="flex gap-2 pt-2 border-t">
            <Input
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatPage;
