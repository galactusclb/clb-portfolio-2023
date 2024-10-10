import { useGSAP } from '@gsap/react';
import { useWindowSize } from '@hooks/index';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useRef, useState } from 'react';
import RevealHeading from '../common/RevealHeading';
import RevealText from '../common/RevealText';
import WorkItem from './WorkItem';
import { WorkItemType } from './WorkItem.type';

gsap.registerPlugin(ScrollTrigger);

const works: WorkItemType[] = [
    { title: "Web Development", bgColor: 'bg-orange-200', description: "Want modern looking landing page? Portfolio page with seamless animations?, that don't just look pretty – they're downright functional. Think of me as your personal web magician, waving my coding wand to create something truly special." },
    { title: "UI/UX Design", bgColor: "bg-red-200", description: "Say goodbye to confusing websites and hello to a modern, user-friendly experience and even your grandma can figure it out (and she'll probably love it too)! I'll design something that's both stylish and practical, so your visitors will have a blast navigating your site." },
    { title: "Full-Stack Development", bgColor: "bg-purple-200", description: "WebSites? Web Apps? Landing page ? ERP ? – not the same! I've got the skills to handle both. As your fullstack developer, I'll bring your idea from concept to launch with industry standard, that's what makes me stand out." },
]

const WorksSection: FC = () => {

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
    }, {
        scope: sliderContainer,
        dependencies: [windowWidth]
    })

    return (
        <section ref={sliderContainer} className='relative flex flex-col w-full h-screen px-3 py-10 overflow-hidden 2xl:mx-auto gap-36 lg:px-32'>
            <div className='flex flex-col items-end'>
                <RevealHeading>
                    <h2 className='text-6xl'>
                        Sooooo,
                    </h2>
                </RevealHeading>
                <RevealText>
                    <p className='pt-3 font-sans'>How Will I Help You With...</p>
                </RevealText>
            </div>

            <div
                className="relative flex gap-10 pb-5 slider-wrapper w-fit h-fit lg:gap-10">
                {
                    works.map((item, index) => (
                        <WorkItem
                            key={index}
                            index={index}
                            timeline={timeline}
                            item={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default WorksSection;