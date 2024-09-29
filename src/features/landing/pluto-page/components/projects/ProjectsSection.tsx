import { useGSAP } from '@gsap/react';
import { useWindowSize } from '@hooks/index';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useRef, useState } from 'react';
import RevealHeading from '../common/RevealHeading';
import ProjectItem from './ProjectItem';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps { }

const ProjectsSection: FC<ProjectsSectionProps> = ({ }) => {

    const sliderContainer = useRef<HTMLDivElement>(null)
    const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

    const windowWidth = useWindowSize()

    useGSAP(() => {
        const sliderChildren = document.querySelectorAll('.slider-item')

        if (!sliderChildren?.length) return

        const tl = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: sliderContainer.current,
                pin: true,
                start: "top top",
                end: "+=300%",
                // end: () => `+=${slider.current?.offsetWidth}`,
                scrub: 1,
                markers: true,
                invalidateOnRefresh: true
                // snap: 0.33,
            }
        })

        setTimeline(tl)

        sliderChildren.forEach((item, index) => {
            if (index + 1 < sliderChildren?.length) {
                tl?.fromTo(
                    '.slider-wrapper',
                    {
                        x: -1 * index * item.clientWidth,
                        ease: "none"
                    },
                    {
                        x: -1 * (index + 1) * item.clientWidth,
                        ease: "none"
                    }
                )
            }
        })

        // ScrollTrigger.refresh();

    }, {
        scope: sliderContainer,
        dependencies: [windowWidth]
    })

    return (
        <div
            ref={sliderContainer}
            className='relative flex flex-col justify-between w-screen h-screen pt-8 overflow-hidden sm:pt-10'>
            <RevealHeading>
                <h1
                    // style={{fontFamily: 'Monument'}}
                    className='leading-[.8] w-full text-right sm:py-10 py-6 uppercase text-[10vw] font-extrabold px-5 '>
                    Projects
                </h1>
            </RevealHeading>
            <div
                className="relative flex gap-2 pb-5 slider-wrapper w-fit h-fit sm:gap-4">
                {[
                    { title: "ZEEEBRAZE", color: "bg-green-300" },
                    { title: "ZEEEBRAZE", color: "bg-red-300" },
                    { title: "ZEEEBRAZE", color: "bg-purple-300" },
                ].map((item, index) => (
                    <ProjectItem
                        key={index}
                        timeline={timeline}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection;