import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useRef } from 'react';
import RevealHeading from '../common/RevealHeading';
import RevealText from '../common/RevealText';
import { Project } from './Project.type';

gsap.registerPlugin(ScrollTrigger)

interface ProjectItemProps {
    item: Project,
    orderNumber: string
}

const ProjectItem: FC<ProjectItemProps> = ({ item, orderNumber }) => {

    const projectContainerRef = useRef<HTMLDivElement>(null)


    useGSAP(() => {

        const projectImages = gsap.utils.toArray('.image-wrapper') as HTMLElement[]
        console.log(projectImages);

        projectImages.forEach((item) => {

            const image = item.querySelector('img'); 

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 60%",
                    // end: "+=200px",
                    // scrub: 1,
                    toggleActions: "restart none none reverse",
                    invalidateOnRefresh: true
                },
            })

            tl.fromTo(image, {
                duration: 1,
                scale: 0.9,
            }, {
                ease: 'power2.out',
                scale: 1
            })
                .fromTo(item, {
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

        })
    }, {
        scope: projectContainerRef
    })

    return (
        <div ref={projectContainerRef} className='pb-24 project-item lg:px-8' id={item?.targetId}>
            <div className='flex items-center justify-between gap-6'>
                <RevealHeading>
                    <h5 className='font-sans italic'>{item?.type}</h5>
                </RevealHeading>
                {/* <span className='block flex-grow h-[2px] bg-gradient-to-r from-transparent via-stone-200 to-transparent rounded-full'></span> */}
                <span className='block flex-grow h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)25%,rgba(231,229,228,1)75%,rgba(0,0,0,0)100%)]'></span>
                <RevealHeading>
                    <h5>{orderNumber}</h5>
                </RevealHeading>
            </div>
 
            <div className="flex flex-col justify-between gap-16 mt-8 xl:flex-row">
                <RevealHeading>
                    <h4 className='text-3xl'>{item?.title}</h4>
                </RevealHeading>
                <RevealText>
                    <p className='font-sans lg:w-[60ch]'>
                        {item?.description}
                    </p>
                </RevealText>
            </div>

            {
                item?.imageList?.length ? (
                    <div className="flex flex-col items-end gap-6 mt-16">
                        {
                            item?.imageList?.map((img, key) => (
                                <div key={key} className="overflow-hidden image-wrapper lg:w-3/4 rounded-xl">
                                    <img src={img} alt="" className='object-cover object-top' />
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div >
    )
}

export default ProjectItem;