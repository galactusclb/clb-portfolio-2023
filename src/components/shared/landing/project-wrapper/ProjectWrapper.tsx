import { FC } from 'react';
import { Project } from './Project.type';
import ProjectItem from './ProjectItem';
import ProjectNameSidebar from './ProjectNameSidebar';

interface ProjectWrapperProps {
    items: Project[]
}

const ProjectWrapper: FC<ProjectWrapperProps> = ({ items }) => {

    return (
        <div className="grid gap-4 xl:grid-cols-[280px,_1fr]">
            <div className='flex-row justify-between hidden gap-4 xl:flex'>
                <ProjectNameSidebar
                    list={items}
                />
                <span className='block h-full w-[2px] rounded-full bg-[linear-gradient(0deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)10%,rgba(231,229,228,1)90%,rgba(0,0,0,0)100%)]'></span>
            </div>
            <div className="flex flex-col">
                {
                    items?.map((item, key) => (
                        <ProjectItem
                            key={key}
                            orderNumber={`0${key + 1}/0${items?.length}`}
                            item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectWrapper;