import { Project } from '@components/shared/landing/project-wrapper/Project.type'
import ProjectWrapper from '@components/shared/landing/project-wrapper/ProjectWrapper'
import RevealHeading from '@components/shared/RevealHeading'
import RevealText from '@components/shared/RevealText'
import useSidemenuAnimation from '@hooks/landing/useSidemenuAnimation'
import img from '@images/home/koeta-home.webp'
import { FC, useRef } from 'react'

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

interface WorksListProps {

}

const WorksList: FC<WorksListProps> = ({ }) => {

    const containerRef = useRef<HTMLElement>(null)

    const { projectList } = useSidemenuAnimation({ containerRef, items: data })

    return (
        <section ref={containerRef} className='relative px-3 bg-[#F7F8F8] z-[2]'>
            <div className='flex flex-col pt-48 pb-24 gap-36 lg:px-32'>
                <div>
                    <RevealHeading>
                        <h2 className='text-6xl'>
                            Web Developments
                        </h2>
                    </RevealHeading>
                    <RevealText>
                        <p className='pt-3 font-sans'>Check out some of my projects by area of expertise</p>
                    </RevealText>
                </div>
                <ProjectWrapper items={projectList} />
            </div>
        </section>
    )
}

export default WorksList;