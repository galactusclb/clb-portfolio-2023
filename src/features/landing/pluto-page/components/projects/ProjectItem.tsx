import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC, useRef } from 'react'

interface ProjectItemProps {
    title: string;
    color: string;
    timeline: gsap.core.Timeline | null;
}

const ProjectItem: FC<ProjectItemProps> = ({
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
                markers: true,
            }
        })

        tl.fromTo(itemRef.current, {
            delay: 1.6,
            scale: 0.7,
            filter: "grayscale(100%) sepia(20%) brightness(80%)"
        }, {
            filter: "none",
            scale: 1,
            ease: "circ.in",
        })

    }, {
        dependencies: [timeline],
        scope: itemRef
    })

    return (
        <div ref={itemRef} className='slider-item w-[90vw] sm:w-[80vw] relative h-[70vh] sm:h-[60vh] will-change-transform'>
            <div className={`object-cover object-center w-full h-full rounded-lg ${color}`}>
                {/* {item.title} */}
            </div>
            <div className="absolute bottom-0 z-20 w-full p-3 text-white mix-blend-difference h-fit">
                <h1
                    // style={{fontFamily: 'Monument'}}
                    className='leading-[.8] w-full text-justify uppercase text-[8vw] font-extrabold'>
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default ProjectItem;