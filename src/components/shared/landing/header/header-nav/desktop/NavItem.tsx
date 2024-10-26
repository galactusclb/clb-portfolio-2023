import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface NavItemProps {
  title: string;
  isActive?: boolean;
  link?: string;
}

const NavItem: FC<NavItemProps> = ({ title, isActive, link }) => {
  return (
    <Link
      className={`nav-link relative flex cursor-pointer flex-col items-center gap-2 ${isActive ? "text-inherit" : "text-gray-400"} hover:text-inherit`}
      to={link || ""}
    >
      {title}
      {isActive ? (
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 5,
                ease: [0.76, 0, 0.24, 1]
            },
           }}
          exit={{ 
            y: 10, opacity: 0
         }}
          className="flex aspect-square w-[6px] rounded-full bg-red-500"
        ></motion.span>
      ) : null}
    </Link>
  );
};

export default NavItem;
