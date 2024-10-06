import { cn } from '@utils/tailwindMergeHelper';
import { FC } from 'react'

interface ImageWrapperProps {
    image?: string;
    className?: string
}

const ImageWrapper: FC<ImageWrapperProps> = ({ image, className }) => {
    return (
        <div className={cn('hero-pic-wrapper relative bg-[#f6deb0] rounded-2xl w-80 h-80 aspect-square flex justify-center items-center', className)}>
            <img src={image} alt="clb illustrate image" className='h-full' />
            <div className='hero-pic-outline absolute flex w-[105%] h-[105%] border-[2px] border-black border-solid -rotate-0 rounded-2xl'></div>
        </div>
    )
}

export default ImageWrapper;