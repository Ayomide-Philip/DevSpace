import {
  House,
  MessageSquareText,
  Presentation,
  Rss,
  Spotlight,
  User,
} from "lucide-react";

export const navbarLink = [
  { path: "/feeds", name: "Feeds", icon: House },
  { path: "/members", name: "Members", icon: User },
  { path: "/projects", name: "Projects", icon: Presentation },
  { path: "/leaderboard", name: "Leaderboard", icon: Spotlight },
  { path: "/blog", name: "Blog", icon: Rss },
  { path: "/chat", name: "Chat", icon: MessageSquareText },
];
