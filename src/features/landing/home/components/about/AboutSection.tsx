import { FC } from 'react'
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';

interface AboutSectionProps {

}

const AboutSection: FC<AboutSectionProps> = ({ }) => {
    return (
        <section className='relative flex flex-col justify-center 2xl:mx-auto 2xl:w-8/12 gap-44 py-36'>
            <SectionTitle />
            <SectionDescription />
        </section>
    )
}

export default AboutSection;