import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { isAuthenticated } from "~~/utils/auth";

export const AccessCodeForm = () => {
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // If already authenticated, redirect to chat
    if (isAuthenticated()) {
      console.log("Already authenticated, redirecting to chat");
      router.replace("/chat");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with code:", accessCode);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessCode }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Access code matches, redirecting to chat");
        router.replace("/chat");
      } else {
        console.log("Access code mismatch");
        setError("Invalid access code. Please try again.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome to Knowledge Base Chat</CardTitle>
        <CardDescription>Please enter your access code to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter access code"
              value={accessCode}
              onChange={e => setAccessCode(e.target.value)}
              className="w-full"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
