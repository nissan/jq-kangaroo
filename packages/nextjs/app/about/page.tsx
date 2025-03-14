import Link from "next/link";
import { Button } from "~~/components/ui/button";
import { Card, CardContent } from "~~/components/ui/card";

const KittyAvatar = () => (
  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      {/* Cute cat face */}
      <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
      {/* Ears */}
      <path d="M30 35L20 20M70 35L80 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="35" cy="45" r="5" fill="currentColor" />
      <circle cx="65" cy="45" r="5" fill="currentColor" />
      {/* Nose */}
      <circle cx="50" cy="55" r="3" fill="currentColor" />
      {/* Mouth */}
      <path d="M45 60Q50 65 55 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Whiskers */}
      <path d="M30 55L15 53M30 58L15 60M70 55L85 53M70 58L85 60" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
);

const WolfAvatar = () => (
  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      {/* Wolf face */}
      <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
      {/* Ears */}
      <path d="M25 30L20 15M75 30L80 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="35" cy="45" r="4" fill="currentColor" />
      <circle cx="65" cy="45" r="4" fill="currentColor" />
      {/* Snout */}
      <path d="M50 50L50 65" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="55" r="6" fill="currentColor" opacity="0.5" />
      {/* Mouth */}
      <path d="M40 60Q50 65 60 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

const PandaAvatar = () => (
  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      {/* Panda face */}
      <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.1" />
      {/* Eye patches */}
      <circle cx="35" cy="40" r="12" fill="currentColor" opacity="0.3" />
      <circle cx="65" cy="40" r="12" fill="currentColor" opacity="0.3" />
      {/* Eyes */}
      <circle cx="35" cy="40" r="4" fill="currentColor" />
      <circle cx="65" cy="40" r="4" fill="currentColor" />
      {/* Nose */}
      <circle cx="50" cy="55" r="5" fill="currentColor" />
      {/* Mouth */}
      <path d="M45 62Q50 65 55 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Ears */}
      <circle cx="30" cy="25" r="8" fill="currentColor" opacity="0.3" />
      <circle cx="70" cy="25" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  </div>
);

const TeamMember = ({
  name,
  role,
  bio,
  avatar,
  linkedin,
}: {
  name: string;
  role: string;
  bio: string;
  avatar: React.ReactNode;
  linkedin?: string;
}) => (
  <Card>
    <CardContent className="p-6 space-y-4">
      {avatar}
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      <p className="text-sm text-center">{bio}</p>
      <div className="flex justify-center space-x-4">
        {linkedin && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

export default function About() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">About JQ Kangaroo</h1>
          <p className="text-xl text-muted-foreground">
            Meet the team behind JQ Kangaroo, building the future of knowledge base interactions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <TeamMember
            name="Angela Chou"
            role="Product Lead"
            bio="Experienced product leader with a background in software development and business management. Passionate about building innovative solutions that bridge technology and user needs."
            avatar={<KittyAvatar />}
            linkedin="https://www.linkedin.com/in/chien-yu-chou-864189269/"
          />
          <TeamMember
            name="Nissan Dookeran"
            role="Tech Lead"
            bio="Experienced tech leader based in Brisbane, specializing in building innovative products leveraging Generative AI. Part of the team developing cutting-edge solutions at JQ Kangaroo."
            avatar={<WolfAvatar />}
            linkedin="https://www.linkedin.com/in/nissandookeran/"
          />
          <TeamMember
            name="Chen Chen"
            role="AI Lead"
            bio="AI specialist focused on developing and optimizing large language models and natural language understanding systems. Leading the AI architecture and implementation at JQ Kangaroo."
            avatar={<PandaAvatar />}
            linkedin="https://www.linkedin.com/in/chen-chen-07829a321/"
          />
        </div>
      </div>
    </div>
  );
}
