import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC, useRef } from 'react'
import RevealHeading from '../common/RevealHeading';
import RevealText from '../common/RevealText';

interface WorkItemProps {
    index: number,
    title: string;
    color: string;
    timeline?: gsap.core.Timeline | null;
}

const WorkItem: FC<WorkItemProps> = ({
    index,
    title,
    color,
    timeline
}) => {

    const itemRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!timeline) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: itemRef.current,
                containerAnimation: timeline,
                start: "left 80%",
                toggleActions: "restart none none reverse",
            }
        })

        tl.fromTo(itemRef.current, {
            delay: 1.6,
            // scale: 0.7,
            // filter: "grayscale(100%) sepia(20%) brightness(80%)"
        }, {
            // filter: "none",
            // scale: 1,
            ease: "circ.in",
        })

    }, {
        dependencies: [timeline],
        scope: itemRef
    })

    return (
        <div ref={itemRef} className='slider-item w-[90vw] sm:w-[65vw] relative h-[70vh] sm:h-[60vh] will-change-transform'>
            <div className={`object-cover object-center w-full h-full rounded-2xl flex flex-col justify-between px-16 py-10 ${color}`}>
                <div>
                    <RevealText>
                        <p>0{index + 1}</p>
                    </RevealText>
                    <RevealHeading >
                        <h3 className='font-extrabold lg:text-3xl'>{title}</h3>
                    </RevealHeading>
                </div>
                <RevealText>
                    <p className='w-full lg:w-3/4 font-sans'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste culpa adipisci odio esse doloribus! Totam qui, porro voluptatum maiores, quaerat, consectetur nemo libero alias facere commodi deleniti mollitia assumenda nostrum atque! Omnis, fugiat dolore. Pariatur.
                    </p>
                </RevealText>
            </div>
        </div>
    )
}

export default WorkItem;