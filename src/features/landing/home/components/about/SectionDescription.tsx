import { FC } from 'react'
import img from "@images/home/clb-pose-min.png";
import RevealText from '../common/RevealText';

interface SectionDescriptionProps {

}

const SectionDescription: FC<SectionDescriptionProps> = ({ }) => {
    return (
        <div className='flex items-center justify-between lg:gap-12'>
            <div className='flex flex-col lg:w-[30ch] gap-10'>
                <RevealText>
                    <p className='flex flex-col gap-2 font-sans leading-6'>
                        <span>My name is CJ, and I'm a front-end developer, who creates websites with a special focus on animations and user interaction.</span>
                        <span>I'm ready to bring your ideas to life and add a touch of originality to the online space.</span>
                    </p>
                </RevealText>

                <a className='relative flex gap-2 cursor-pointer group'>
                    <p className='relative flex flex-col gap-[2px] w-fit uppercase group-hover:text-red-600 duration-200'>
                        More about me
                        <span className='block w-full h-[2px] bg-black rounded-lg group-hover:bg-red-600 duration-200'></span>
                    </p>
                    <div className="flex items-center justify-center font-sans text-white duration-200 bg-black rounded-full group-hover:bg-red-600 w-7 h-7">/</div>
                </a>
            </div>

            <div className='relative flex items-center justify-center rounded-2xl w-80 h-80 aspect-square'>
                <div className='bg-red-400 rounded-2xl w-full h-full overflow-hidden z-[2]'>
                    <img src={img} alt="clb illustrate image" className='object-cover h-full' />
                </div>
                <div className='absolute flex w-full h-full border-[3px] border-black border-solid rotate-12 rounded-2xl'></div>
            </div>
        </div>
    )
}

export default SectionDescription;