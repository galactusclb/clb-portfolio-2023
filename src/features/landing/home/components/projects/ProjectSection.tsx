import { FC, useRef } from 'react'
import ProjectItem from './ProjectItem';
import ProjectNameSidebar from './ProjectNameSidebar';
import DiscoverMore from './DiscoverMore';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from "framer-motion"
import RevealHeading from '../common/RevealHeading';
import RevealText from '../common/RevealText';

const ProjectSection: FC = () => {

    const containerRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const height = useTransform(scrollYProgress, [0, 0.95], [50, 0])

    const projectItems = ['1', '2', '3']

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

                <div className="grid gap-4 lg:grid-cols-[280px,_1fr]">
                    <div className='flex-row justify-between hidden sm:flex'>
                        <ProjectNameSidebar
                            list={[
                                'Tasty Mock',
                                'Koeta'
                            ]}
                        />
                        <span className='block h-full w-[2px] rounded-full bg-[linear-gradient(0deg,rgba(0,0,0,0)0%,rgba(231,229,228,1)10%,rgba(231,229,228,1)90%,rgba(0,0,0,0)100%)]'></span>
                    </div>
                    <div className="flex flex-col gap-12">
                        {
                            projectItems?.map((item, key) => (
                                <ProjectItem key={key} />
                            ))
                        }
                    </div>
                </div>
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