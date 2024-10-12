import { cn } from '@utils/tailwindMergeHelper';
import { FC } from 'react'

interface ImageWrapperProps {
    image?: string;
    className?: string;
    borderClassName?: string
}

const ImageWrapper: FC<ImageWrapperProps> = ({ image, className, borderClassName }) => {
    return (
        // <div className={cn('hero-pic-wrapper relative bg-[#f6deb0] rounded-2xl w-80 h-80 aspect-square flex justify-center items-center  [clip-path:polygon(30%_30%,70%_30%,70%_70%,30%_70%)]', className)}>
        <div className={cn('hero-pic-wrapper relative bg-purple-200 rounded-2xl w-80 h-80 aspect-square flex justify-center items-center', className)}>
            <div className='mask flex justify-center bg-[#f6deb0] rounded-2xl w-full h-full overflow-hidden z-[2] [clip-path:polygon(30%_30%,70%_30%,70%_70%,30%_70%)]'>
                <img src={image} alt="clb illustrate image" className='object-cover h-full' />
            </div>
            <div className={cn('hero-pic-outline absolute flex w-full h-full border-[2px] border-black border-solid rotate-0 rounded-2xl', borderClassName)}></div>
        </div>
    )
}

export default ImageWrapper;