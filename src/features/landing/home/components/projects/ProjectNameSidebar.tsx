import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FC, useEffect, useRef } from 'react';
import RevealHeading from '../common/RevealHeading';
import { Project } from './Project.type';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

interface ProjectNameSidebarProps {
    list?: Project[]
}

const ProjectNameSidebar: FC<ProjectNameSidebarProps> = ({ list }) => {

    const containerRef = useRef<HTMLDivElement>(null)

    // useGSAP(()=>{
    //     const links = gsap.utils.toArray('.project-title')

    //     // console.log(links);

    //     // // gsap.set(`.chapter-${numChapter} .page-${numPage} .storyline`, {color:'red'})
    //     // gsap.set(links, {color:'red'})
    //     gsap.set(links, {color:'red'})

    //     const animation = gsap.to(links, {
    //         color: 'lime',
    //         duration: 0.5,
    //         stagger: 1
    //     })

    //     ScrollTrigger.create({
    //         trigger: containerRef.current,
    //         start: "top 120px",
    //         end: "bottom 60%",
    //         pin: containerRef.current,
    //         markers: true,

    //         animation: animation
    //     })
    // }, {
    //     scope: containerRef
    // })

    const { contextSafe } = useGSAP(() => {

        const links = gsap.utils.toArray('.project-title .active-dot')

        // list?.forEach((item, key) => {
        //     const element = document.querySelector(`.project-title-${key} .active-dot`);
        //     if (item?.isActive) {
        //         gsap.fromTo(element, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        //     } else {
        //         gsap.fromTo(element, { y: 0, opacity: 1 }, { y: 10, opacity: 0, duration: 0.5 });
        //     }
        // });
        // links.forEach((span, index) => {
        //     if (span && list && list[index]?.isActive) {
        //         gsap.fromTo(span,
        //             {
        //                 // x: 0,
        //                 opacity: 0
        //             },
        //             {
        //                 // x: -30,
        //                 opacity: 1,
        //                 duration: 0.5,
        //                 yoyo: true,
        //                 repeat: 1
        //             }
        //         );
        //     }
        // });

        list?.forEach((item, key) => {
            const element = document.querySelector(`.project-title-${key} .active-dot`);
            if (item?.isActive) {
                gsap.fromTo(element, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
            } else {
                gsap.fromTo(element,
                    { x: 0, opacity: 1 },
                    {
                        x: -10,
                        opacity: 0,
                        duration: 0.5,
                        // onComplete
                    });
            }
        });
    }, {
        scope: containerRef,
        dependencies: [list],
    });

    // const [isVisible, setIsVisible] = useState(show);

    // useEffect(() => {
    //     if (show) {
    //         setIsVisible(true);
    //         gsap.fromTo(elementRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    //     } else {
    //         gsap.to(elementRef.current, {
    //             opacity: 0,
    //             duration: 1,
    //             onComplete: () => setIsVisible(false)
    //         });
    //     }
    // }, [show]);


    const goToProject = contextSafe((target?: string) => {
        if (!target) return

        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y: `#${target}`,
                offsetY: 120,
            },
            ease: "circ.out",
        })
    });

    return (
        <div ref={containerRef} className='flex flex-col flex-grow gap-2 project-sidebar'>
            <div className='flex items-center justify-between w-full gap-6 mb-8'>
                <RevealHeading>
                    <h5 className='font-sans italic'>Projects</h5>
                </RevealHeading>
                <span className='block flex-grow h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)25%,rgba(231,229,228,1)75%,rgba(0,0,0,0)100%)]'></span>
            </div>

            {
                list?.map((item, key) => (
                    <a
                        key={key}
                        className={`project-title project-title-${key} flex flex-row gap-2 items-center transition-colors duration-500 cursor-pointer ${item?.isActive ? 'text-lime-400' : ''}`}
                        onClick={() => goToProject(item?.targetId)}
                    >
                        {
                            item?.isActive ? (
                                <span className='active-dot flex w-[6px] bg-red-500 rounded-full aspect-square'></span>
                            ) : null
                        }
                        <RevealHeading>
                            <span>{item?.title}</span>
                        </RevealHeading>
                    </a>
                ))
            }
        </div>
    )
}

export default ProjectNameSidebar;