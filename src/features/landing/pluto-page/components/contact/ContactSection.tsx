import { FC } from 'react';
import RevealHeading from '../common/RevealHeading';

interface ContactSectionProps {

}

const ContactSection: FC<ContactSectionProps> = ({ }) => {
    const links: string[] = [
        'Instagram',
        'LinkedIn',
        'Book A Call',
        'Email',
    ]

    return (
        <div className='relative h-[50vh] sm:h-[80vh] md:h-screen flex w-full'>
            <div className="flex flex-col items-end justify-end w-full h-full gap-10 px-5 pt-12 pb-8">
                <RevealHeading>
                    <h1
                        // style={{fontFamily: 'Monument'}}
                        className='leading-[.8] w-full text-justify uppercase text-[10vw] font-extrabold'>
                        Don't Hesitate To Reach Out
                    </h1>
                </RevealHeading>
                <div className='flex items-center justify-between w-full text-sm sm:text-base'>
                    {links?.map((item, index) => (
                            <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactSection;