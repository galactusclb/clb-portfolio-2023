import { cn } from '@utils/tailwindMergeHelper';
import { FC } from 'react'

interface ImageWrapperProps {
    image?: string;
    className?: string;
    borderClassName?: string
}

const ImageWrapper: FC<ImageWrapperProps> = ({ image, className, borderClassName }) => {
    return (
        <div className={cn('hero-pic-wrapper relative bg-[#f6deb0] rounded-2xl w-80 h-80 aspect-square flex justify-center items-center', className)}>
            <img src={image} alt="clb illustrate image" className='object-cover h-full ' />
            <div className={cn('hero-pic-outline absolute flex w-[105%] h-[105%] border-[2px] border-black border-solid rotate-0 rounded-2xl', borderClassName)}></div>
        </div>
    )
}

export default ImageWrapper;