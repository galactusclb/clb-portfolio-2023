import { FC } from 'react'
import { motion } from 'framer-motion'
import Header from '@components/shared/landing/header/Header';
import { zoom } from '@animations/page-transition/PageTransitionAnimation';

interface AboutContainerProps {

}

const AboutContainer: FC<AboutContainerProps> = ({ }) => {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={zoom}
            className='relative w-full min-h-screen bg-[#e4e41f] text-[#3D4343] overflow-y-auto overflow-x-hidden origin-center rounded-3xl'>
            <Header />
            About Page
        </motion.div>
    )
}

export default AboutContainer;