import { SectionTitle } from '@components/ui';
import { FC } from 'react'
import RevealText from '../common/RevealText';
import RevealHeading from '../common/RevealHeading';

interface AboutSectionProps { }

const AboutSection: FC<AboutSectionProps> = () => {

    const aboutSectionContent = [
        {
            title: "Who we are",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque est perferendis voluptate expedita accusamus!"
        },
        {
            title: "Our Mission",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque est perferendis voluptate expedita accusamus!"
        },
        {
            title: "Our Expertise",
            bullets: [
                {
                    title: "Web Design & Development",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque est perferendis voluptate expedita accusamus!"
                },
                {
                    title: "UI/UX Design",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque est perferendis voluptate expedita accusamus!"
                },
                {
                    title: "Animations & Interactions",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque est perferendis voluptate expedita accusamus!"
                },
                {
                    title: "Responsive & Mobile-First Design",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
            ]
        },
    ]

    return (
        <div className='relative w-full h-fit'>
            <div className='flex flex-col w-full px-5 pt-20 space-y-5 sm:space-y-8 md:space-y-10 sm:pt-28'>
                <RevealHeading>
                    <h1
                        // style={{fontFamily: 'Monument'}}
                        className='leading-[.8] w-full md:text-right uppercase text-[10vw] font-extrabold'>
                        About Us
                    </h1>
                </RevealHeading>

                {
                    aboutSectionContent.map((section, index) => (
                        <div className='flex flex-col space-y-2 sm:space-y-3 max-w-7xl' key={index}>
                            <RevealHeading>
                                <h3
                                    // style={{ fontFamily: "Moment" }}
                                    className='text-lg font-bold uppercase sm:text-2xl'
                                >
                                    {section.title}
                                </h3>
                            </RevealHeading>
                            {
                                section.description && (
                                    <RevealText>
                                        <p className='text-sm sm:text-base'>{section.description}</p>
                                    </RevealText>
                                )
                            }
                            {
                                section.bullets?.map((item, index) => (
                                    <div key={index}>
                                        <RevealText>
                                            <p className="text-sm sm:text-base">
                                                <span className='text-base font-bold sm:text-lg pe-2'>
                                                    {item.title}:
                                                </span>
                                                {item.description}
                                            </p>
                                        </RevealText>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutSection;