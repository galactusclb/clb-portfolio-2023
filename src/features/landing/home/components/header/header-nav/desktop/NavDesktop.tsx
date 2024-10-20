import { FC } from 'react'
import NavItem, { NavItemProps } from './NavItem';

interface NavDesktopProps {
    navItems: NavItemProps[]
}

const NavDesktop: FC<NavDesktopProps> = ({ navItems }) => {
    return (
        <div className='relative hidden _desktop md:flex gap-7'>
            {navItems?.map((item, index) => <NavItem key={index} title={item.title} isActive={item?.isActive} link={item?.link}/>)}
        </div>
    )
}

export default NavDesktop;