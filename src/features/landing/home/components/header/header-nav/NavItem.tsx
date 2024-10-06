import { FC } from 'react'

export interface NavItemProps {
    title: string,
    isActive?: boolean
}

const NavItem: FC<NavItemProps> = ({ title, isActive }) => {
    return (
        <a className={`nav-link relative flex flex-col cursor-pointer gap-2 items-center ${isActive ? "text-inherit" : "text-gray-400"} hover:text-inherit`}>
            {title}
            {
                isActive ? (
                    <span className='flex w-[6px] bg-red-500 rounded-full aspect-square'></span>
                ) : null
            }
        </a>
    )
}

export default NavItem;