import { FC, useRef } from 'react'
import img from '@images/home/koeta-home.webp'
import RevealHeading from '../common/RevealHeading';
import RevealText from '../common/RevealText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ProjectItemProps {

}

const ProjectItem: FC<ProjectItemProps> = ({ }) => {

    const projectContainerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.image-wrapper',
                // start: "top 65%",
                start: "top 60%",
                // end: "+=200px",
                // scrub: 1,
                toggleActions: "restart none none reverse",
            },
        })

        tl.fromTo('.image-wrapper img', {
            duration: 1,
            scale: 0.9,
        }, {
            ease: 'power2.out',
            scale: 1
        })
            .fromTo('.image-wrapper', {
                duration: 1.6,
                // clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
                // clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
            }, {
                // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                // clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "circ.in",
            }, 
        "<")
    }, {
        scope: projectContainerRef
    })

    return (
        <div ref={projectContainerRef} className='px-3 pb-12 lg:px-8'>
            <div className='flex items-center justify-between gap-6'>
                <RevealHeading>
                    <h5 className='font-sans italic'>Web Development</h5>
                </RevealHeading>
                {/* <span className='block flex-grow h-[2px] bg-gradient-to-r from-transparent via-stone-200 to-transparent rounded-full'></span> */}
                <span className='block flex-grow h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)25%,rgba(231,229,228,1)75%,rgba(0,0,0,0)100%)]'></span>
                <RevealHeading>
                    <h5>01/02</h5>
                </RevealHeading>
            </div>

            {/* project description */}
            <div className="flex flex-col justify-between gap-16 mt-8 lg:flex-row">
                <RevealHeading>
                    <h4 className='text-3xl'>Tasty Mock</h4>
                </RevealHeading>
                <RevealText>
                    <p className='font-sans lg:w-[60ch]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus quos consectetur voluptatibus possimus consequuntur dolor recusandae! Labore veritatis nostrum, laudantium vero qui fugit? Cum nisi quidem minima. Iste, eligendi.
                    </p>
                </RevealText>
            </div>

            <div className="flex flex-col items-end gap-6 mt-16">
                <div className="overflow-hidden image-wrapper lg:w-3/4 rounded-xl">
                    <img src={img} alt="" className='object-cover object-top' />
                </div>
            </div>
        </div >
    )
}

export default ProjectItem;