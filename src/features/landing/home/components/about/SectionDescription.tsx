import { FC, useRef } from 'react'
import img from "@images/home/clb-pose-min.png";
import RevealText from '../common/RevealText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const SectionDescription: FC = () => {

    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.image-wrapper',
                start: 'top 60%',
                toggleActions: "restart none none reverse",
                invalidateOnRefresh: true,
                markers: true,
            }
        })

        tl
            .fromTo('.image-wrapper',
                { opacity: 0 }, { opacity: 1 })
            .fromTo('.mask img', {
                scale: 2,
                delay: 1
            }, {
                scale: 1
            })
            .fromTo('.mask', {
                opacity: 0
            }, {
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }, 1)
            .to('.mask', {
                scale: 0.95, duration: 2
            })
            .fromTo('.image-border', {
                opacity: 0,
                delay: 1,
            }, {
                opacity: 1
            }, 2)
    }, {
        scope: containerRef
    })

    return (
        <div ref={containerRef} className='flex flex-col items-center justify-between gap-24 md:flex-row'>
            <div className='flex flex-col w-full lg:w-[30ch] gap-10 order-2 md:order-1'>
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


            <div className='relative flex items-center justify-center order-1 bg-purple-200 image-wrapper rounded-2xl w-80 h-80 aspect-square md:order-2'>
                <div className='mask bg-red-200 rounded-2xl w-full h-full overflow-hidden z-[2] [clip-path:polygon(30%_30%,70%_30%,70%_70%,30%_70%)]'>
                    <img src={img} alt="clb illustrate image" className='object-cover h-full' />
                </div>
                <div className='image-border absolute flex w-full h-full border-[2px] border-black border-solid rotate-12 rounded-2xl'></div>
            </div>
        </div>
    )
}

export default SectionDescription;