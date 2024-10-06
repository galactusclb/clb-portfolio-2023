import { FC } from 'react'
import NavItem, { NavItemProps } from './NavItem';


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
        <div className='relative hidden md:flex gap-7'>
            {navItems?.map((item, index) => <NavItem key={index} title={item.title} isActive={item?.isActive} />)}
        </div>
    )
}

export default HeaderNav;