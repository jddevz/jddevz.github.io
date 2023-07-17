import { Divider } from "./divider";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const SOCIAL_ICONS = [
  {
    icon: <AiOutlineInstagram className="text-2xl ml-2 hover:text-blue-400" />,
    link: "https://www.instagram.com/jamesduong/",
  },
  {
    icon: (
      <AiFillLinkedin className="text-white text-2xl ml-2 hover:text-blue-400" />
    ),
    link: "https://www.linkedin.com/in/james-duong-9168a89a/",
  },
  {
    icon: (
      <AiOutlineGithub className="text-white text-2xl ml-2 hover:text-blue-400" />
    ),
    link: "https://github.com/jpduong",
  },
];

export const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="py-4 mt-auto text-white flex items-center justify-between">
        <span>Copyright © 2023 | All rights reserved. </span>
        <div className="flex gap-1">
          {SOCIAL_ICONS.map((socialIcon, index) => (
            <a
              key={index}
              href={socialIcon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};
