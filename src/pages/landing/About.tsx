import { AboutContainer } from '@features/landing/about';
import LandingLayout from '@layouts/landing/LandingLayout';
import { FC } from 'react';

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    return (
        <LandingLayout>
            <AboutContainer />
        </LandingLayout>
    )
}

export default About;