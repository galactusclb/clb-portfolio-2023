import { Avatar } from '@components/ui';
import { FC } from 'react'
import propic from "@images/home/clb-pose-min.png"

interface HeaderLogoProps {

}

const HeaderLogo: FC<HeaderLogoProps> = () => {
    return (
        <div className='flex items-center gap-2 logo'>
            <Avatar
                image={propic}
            /> @CLB
        </div>
    )
}

export default HeaderLogo;