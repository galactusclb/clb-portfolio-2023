import { FC } from 'react'
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';

interface AboutSectionProps {

}

const AboutSection: FC<AboutSectionProps> = ({ }) => {
    return (
        <section className='relative flex flex-col justify-center gap-24 px-3 pt-0 2xl:mx-auto 2xl:w-8/12 lg:gap-44 sm:py-36 lg:px-0'>
            <SectionTitle />
            <SectionDescription />
        </section>
    )
}

export default AboutSection;