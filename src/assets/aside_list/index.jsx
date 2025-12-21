import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { GiOpenFolder } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const nav_list = [
  {
    link: "#hero",
    icon: <GoHomeFill />,
  },
  {
    link: "#about",
    icon: <IoPersonSharp />,
  },
  {
    link: "#projects",
    icon: <GiOpenFolder />,
  },
  {
    link: "#contact",
    icon: <MdEmail />,
  },
];

export default nav_list;
