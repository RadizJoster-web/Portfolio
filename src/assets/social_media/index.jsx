import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const social_media_list = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/username",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://instagram.com/username",
    icon: <FaInstagram />,
  },
  {
    id: 5,
    name: "YouTube",
    url: "https://youtube.com/c/channelname",
    icon: <FaYoutube />,
  },
];

export default social_media_list;
