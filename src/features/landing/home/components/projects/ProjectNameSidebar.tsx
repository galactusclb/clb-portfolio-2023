import { FC } from 'react'
import RevealHeading from '../common/RevealHeading';

interface ProjectNameSidebarProps {
    list?: string[]
}

const ProjectNameSidebar: FC<ProjectNameSidebarProps> = ({ list }) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                list?.map((item, key) => (
                    <RevealHeading>
                        <p className='' key={key}>{item}</p>
                    </RevealHeading>
                ))
            }
        </div>
    )
}

export default ProjectNameSidebar;