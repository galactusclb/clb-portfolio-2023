import { RootState } from "@store/index";
import { motion } from "framer-motion";
import { FC, ReactNode } from 'react';
import { useSelector } from "react-redux";

interface TransitionSlideinSlideupProps {
    children: ReactNode;
}

const TransitionSlideinSlideup: FC<TransitionSlideinSlideupProps> = ({ children }) => {
    const { currentPage } = useSelector(
        (state: RootState) => state.currentPage
    );

    const animate = (variants: any, transition: any) => ({
        initial: "initial",
        animate: "enter",
        exit: 'exit',
        variants,
        transition
    })

    const slideIn = {
        initial: {
            scaleY: 0,
        },
        enter: {
            scaleY: 0,
        },
        exit: {
            scaleY: 1,
        },
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }

    const slideUp = {
        initial: {
            scaleY: 1,
        },
        enter: {
            scaleY: 0,
            // opacity: 0
        },
        exit: {
            scaleY: 0,
        },
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }

    const text = {

        initial: {
            opacity: 1,
        },
        enter: {
            opacity: 0,
            top: "10%",
            transition: {
                duration: .4,
                ease: [0.5, 1, 0.89, 1]
            },
            transitionEnd: { top: "47.5%" }
        },
        exit: {
            opacity: 1,
            top: "40%",
            transition: {
                duration: 1,
                delay: .16,
                ease: [0.33, 1, 0.68, 1]
            }
        }

    }


    const anim = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }


    return (
        <>
            {children}
            <motion.p className='absolute left-1/2 top-[40%] capitalize text-[#F7F8F8] -translate-x-1/2 text-center text-5xl z-[100]' {...anim(text)}>
                {currentPage !== '/' ? currentPage?.split('/')?.slice(1) : 'Home'}
            </motion.p>
            <motion.div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen origin-bottom bg-[#3D4343] z-[99]" {...animate(slideIn, slideIn.transition)}>
            </motion.div>
            <motion.div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen origin-top bg-[#3D4343] z-[99]" {...animate(slideUp, slideUp.transition)}>
            </motion.div>
        </>
    )
}

export default TransitionSlideinSlideup;