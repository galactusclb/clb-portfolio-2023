import { FC } from 'react';
import NavDesktop from './desktop/NavDesktop';
import { NavItemProps } from './desktop/NavItem';
import NavMobile from './mobile/NavMobile';


const HeaderNav: FC = ({ }) => {

    const navItems: NavItemProps[] = [
        {
            title: 'Home',
            isActive: true
        },
        {
            title: 'About'
        },
        {
            title: 'Works'
        }
    ]

    return (
        <>
            <NavDesktop navItems={navItems} />
            <NavMobile navItems={navItems}/>
        </>
    )
}

export default HeaderNav;