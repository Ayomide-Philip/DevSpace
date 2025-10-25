import {
  Contact2,
  Grid,
  HomeIcon,
  Info,
  MessageCircle,
  Users2,
} from "lucide-react";
import DesktopNavBar from "./navbar/desktopnavbar";
import RootHeader from "./navbar/header";

export default function NavBar() {
  const navbarLink = [
    { path: "/", name: "Home", icon: HomeIcon },
    { path: "/about", name: "About", icon: Info },
    { path: "/projects", name: "Projects", icon: Grid },
    { path: "/team", name: "Teams", icon: Users2 },
    { path: "/contact", name: "Contact", icon: Contact2 },
    { path: "/blog", name: "Blog", icon: MessageCircle },
  ];
  return (
    <>
      <RootHeader />
      <DesktopNavBar navbarLink={navbarLink} />
    </>
  );
}
