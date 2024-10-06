import RevealHeading from '@features/landing/pluto-page/components/common/RevealHeading';
import { FC } from 'react'
import RevealText from '../common/RevealText';

interface SectionTitleProps {

}

const SectionTitle: FC<SectionTitleProps> = ({ }) => {
    return (
        <div className='flex flex-col items-center w-full gap-6 text-center'>
            <h3 className='flex flex-col gap-2 text-4xl'>
                <RevealHeading>
                    <span>Chanaka Lakshan, </span>
                </RevealHeading>
                <RevealHeading>
                    <span className='font-sans'>front-end developer & Freelance Designer</span>
                </RevealHeading>
            </h3>

            <RevealText>

                <p className='font-sans lg:text-base 2xl:text-lg w-[100ch]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam distinctio ut nesciunt, explicabo architecto velit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ex!
                </p>
            </RevealText>
        </div>
    )
}

export default SectionTitle;