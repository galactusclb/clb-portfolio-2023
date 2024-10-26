import { Project } from "@components/shared/landing/project-wrapper/Project.type";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@hooks/index";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useState } from "react";
import defaultTheme from 'tailwindcss/defaultTheme';

gsap.registerPlugin(ScrollTrigger)

interface UseSidemenuAnimationProps {
    containerRef: RefObject<HTMLElement>;
    items: Project[]
}

const useSidemenuAnimation = ({
    containerRef,
    items
}: UseSidemenuAnimationProps) => {
    const [projectList, setProjectList] = useState<Project[]>(items)

    const toggleActive = (itemIndex: number, status: boolean, isBack?: boolean) => {
        //to stay active the last item when scroll down
        if (itemIndex === projectList?.length - 1 && !status && !isBack) return

        setProjectList((items) => items?.map((item, index) => {
            if (index !== itemIndex) return item

            return { ...item, isActive: status }
        }))
    }

    const windowWidth = useWindowSize()

    useGSAP(() => {
        let mm = gsap.matchMedia()
        let st: ScrollTrigger;

        mm.add(`(min-width: ${defaultTheme.screens.xl})`, () => {

            // const projectLinks: HTMLElement[] = gsap.utils.toArray('.project-title')
            const projectItems = gsap.utils.toArray('.project-item') as HTMLElement[]

            const sidebar = document.querySelector('.project-sidebar');

            // if (sidebar) {
            //     //? To fixed the project side menu
            st = ScrollTrigger.create({
                trigger: sidebar,
                start: "top 120px",
                end: "bottom 30%",
                // end: () => `+=${containerRef.current?.offsetHeight}`,
                pin: sidebar,
                invalidateOnRefresh: true,
markers: true
                // animation: animation
            })
            // }


            //? To change the active side menu based on project
            projectItems.forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 90%",
                    // end: "top 30%",
                    end: () => `+=${item?.offsetHeight}`,
                    // animation: gsap.to(projectLinks[index], {color: 'orange'}),
                    // onLeave: () => gsap.to(projectLinks[index], {color: ''}),
                    // toggleClass: { targets: projectLinks[index], className: 'opacity-20' },
                    onEnter: () => toggleActive(index, true),
                    onLeave: () => toggleActive(index, false),
                    onEnterBack: () => toggleActive(index, true),
                    onLeaveBack: () => toggleActive(index, false, true),
                    scrub: true,
                    invalidateOnRefresh: true
                })
            })

        })

        return () => {
            st?.kill(true);
        };
    }, {
        scope: containerRef,
        dependencies: [windowWidth, projectList?.length],
        revertOnUpdate: true
    })

    return {
        projectList
    }
}

export default useSidemenuAnimation;