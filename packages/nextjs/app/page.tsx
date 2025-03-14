"use client";

import Link from "next/link";
import { Button } from "~~/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-4">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Welcome to JQ Kangaroo</h1>
        <p className="text-xl text-muted-foreground">
          Your AI-powered knowledge base assistant. Ask questions, get insights, and explore your data with natural
          language.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/chat">Try Chat</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
