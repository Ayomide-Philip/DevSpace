import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango, DiRuby, DiSwift } from "react-icons/di";
import {
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiGnubash,
  SiMongodb,
  SiPhp,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

const defaultIcons = [
  { name: "html", icon: FaHtml5 },
  { name: "css", icon: FaCss3 },
  { name: "javascript", icon: RiJavascriptFill },
  { name: "react", icon: FaReact },
  { name: "tailwindcss", icon: RiTailwindCssFill },
  { name: "nextjs", icon: RiNextjsFill },
  { name: "expressjs", icon: SiExpress },
  { name: "mongodb", icon: SiMongodb },
  { name: "python", icon: FaPython },
  { name: "nodejs", icon: FaNodeJs },
  { name: "java", icon: FaJava },
  { name: "figma", icon: FaFigma },
  { name: "typescript", icon: SiTypescript },
  { name: "php", icon: SiPhp },
  { name: "ruby", icon: DiRuby },
  { name: "swift", icon: DiSwift },
  { name: "bootstrap", icon: FaBootstrap },
  { name: "prisma", icon: SiPrisma },
  { name: "postgresql", icon: BiLogoPostgresql },
  { name: "django", icon: DiDjango },
  { name: "git", icon: FaGitAlt },
  { name: "bash", icon: SiGnubash },
];
export default function generateIcon({ name }) {
  const icons = defaultIcons.find((i) => {
    return i.name == name;
  });
  if (!icons) return;
  const Icon = icons.icon;
  return <Icon />;
}
