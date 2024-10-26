import { FC } from "react";
import { useLocation } from "react-router-dom";

import NavItem, { NavItemProps } from "./NavItem";

interface NavDesktopProps {
  navItems: NavItemProps[];
}

const NavDesktop: FC<NavDesktopProps> = ({ navItems }) => {
  const location = useLocation();

  return (
    <div className="relative hidden _desktop gap-7 md:flex">
      {navItems?.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          isActive={location.pathname === item?.link}
          link={item?.link}
        />
      ))}
    </div>
  );
};

export default NavDesktop;
