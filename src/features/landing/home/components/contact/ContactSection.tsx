import { FC, useRef } from 'react'
import ContactForm from './ContactForm';
import { motion, useScroll, useTransform } from "framer-motion"
import RevealHeading from '../common/RevealHeading';

const ContactSection: FC = () => {

    const containerRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })
    const y = useTransform(scrollYProgress, [0, 1], [-200, 0])


    return (
        <motion.section style={{ y }} ref={containerRef} className='relative bg-[#3D4343] text-[#F7F8F8] flex flex-col items-end w-full pb-32 2xl:mx-auto gap-36 px-3 lg:px-32 pt-40'>
            <h2 className='flex flex-col justify-end gap-4 text-4xl sm:text-6xl text-end'>
                <RevealHeading>
                    <span>
                        Let's Talk About the
                    </span>
                </RevealHeading>
                <RevealHeading>
                    <span>
                        Next big thing
                    </span>
                </RevealHeading>
            </h2>

            <div className="flex w-full lg:w-[600px] justify-end">
                <ContactForm />
            </div>
        </motion.section>
    )
}

export default ContactSection;