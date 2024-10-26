import DiscoverMore from '@components/shared/landing/project-wrapper/DiscoverMore';
import ProjectWrapper from '@components/shared/landing/project-wrapper/ProjectWrapper';
import RevealHeading from '@components/shared/RevealHeading';
import RevealText from '@components/shared/RevealText';
import useSidemenuAnimation from '@hooks/landing/useSidemenuAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';
import img from '@images/home/koeta-home.webp';
import { Project } from '@components/shared/landing/project-wrapper/Project.type';

const data: Project[] = [
    {
        title: 'Tasty Mock',
        isActive: true,
        targetId: 'project_tasty-mock',
        type: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus quos consectetur voluptatibus possimus consequuntur dolor recusandae! Labore veritatis nostrum, laudantium vero qui fugit? Cum nisi quidem minima. Iste, eligendi.',
        imageList: [img]
    }, {
        title: 'Koeta',
        targetId: 'project_koeta',
        type: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus quos consectetur voluptatibus possimus consequuntur dolor recusandae! Labore veritatis nostrum, laudantium vero qui fugit? Cum nisi quidem minima. Iste, eligendi.',
        imageList: [img, img]
    }, {
        title: 'New Project',
        targetId: 'project_new-project',
        type: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus quos consectetur voluptatibus possimus consequuntur dolor recusandae! Labore veritatis nostrum, laudantium vero qui fugit? Cum nisi quidem minima. Iste, eligendi.'
    }
]

const ProjectSection: FC = () => {

    const containerRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const height = useTransform(scrollYProgress, [0, 0.95], [50, 0])

    const { projectList } = useSidemenuAnimation({ containerRef, items: data })

    return (
        <section ref={containerRef} className='relative px-3 bg-[#F7F8F8] z-[2]'>
            <div className='flex flex-col pt-48 pb-24 gap-36 lg:px-32'>
                <div>
                    <RevealHeading>
                        <h2 className='text-6xl'>
                            Selected Works
                        </h2>
                    </RevealHeading>
                    <RevealText>
                        <p className='pt-3 font-sans'>Check out some of my projects by area of expertise</p>
                    </RevealText>
                </div>
                <ProjectWrapper items={projectList} />
                <DiscoverMore />
            </div>
            <motion.div className="relative w-full bg-orange-200 circle-container" style={{ height }}>
                <div className="circle absolute h-[1950%] w-[120%] -left-[10%] bg-[#F7F8F8] rounded-tl-none rounded-tr-none rounded-bl-[50%] rounded-br-[50%]"
                    style={{
                        boxShadow: "0 60px 50px rgba(0, 0, 0, 0.748)"
                    }}
                ></div>
            </motion.div>
        </section>
    )
}

export default ProjectSection;