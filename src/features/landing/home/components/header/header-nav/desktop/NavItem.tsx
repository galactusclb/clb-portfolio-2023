import { FC } from 'react'
import { Link } from 'react-router-dom';

export interface NavItemProps {
    title: string,
    isActive?: boolean;
    link?: string
}

const NavItem: FC<NavItemProps> = ({ title, isActive, link }) => {
    return (
        <Link
            className={`nav-link relative flex flex-col cursor-pointer gap-2 items-center ${isActive ? "text-inherit" : "text-gray-400"} hover:text-inherit`}
            to={link || ''}
        >
            {title}
            {
                isActive ? (
                    <span className='flex w-[6px] bg-red-500 rounded-full aspect-square'></span>
                ) : null
            }
        </Link>
    )
}

export default NavItem;