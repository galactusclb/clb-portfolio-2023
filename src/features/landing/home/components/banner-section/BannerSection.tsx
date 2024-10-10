import { FC } from 'react'
import RevealHeading from '../common/RevealHeading';

const BannerSection: FC = () => {
    return (
        <section className='relative py-48 text-center 2xl:mx-auto 2xl:w-8/12 gap-36 lg:px-24' id="sas">
            <RevealHeading>
                <h2 className='text-6xl'>
                    <span className='font-sans'>You</span> Bring the Vision,
                </h2>
            </RevealHeading>
            <RevealHeading>
                <h2 className='pt-5 text-6xl'>
                    <span className='font-sans'>I Help You </span> Stand Out.
                </h2>
            </RevealHeading>
        </section>
    )
}

export default BannerSection;