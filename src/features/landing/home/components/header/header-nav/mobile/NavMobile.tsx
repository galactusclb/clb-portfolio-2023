import { FC, useState } from 'react'
import { Menu, X } from 'react-feather';
import { NavItemProps } from '../desktop/NavItem';
import { AnimatePresence, motion } from 'framer-motion'
import { anim_menuSlide, anim_slide } from './Animations';
import Curve from './Curve';

interface NavMobileProps {
    navItems: NavItemProps[]
}

const NavMobile: FC<NavMobileProps> = ({ navItems }) => {

    const [isActive, setActive] = useState<boolean>(false);

    return (
        <>
            <div className={`relative flex md:hidden items-center justify-center z-[2] w-12 h-12 text-black ${isActive ? 'bg-white' : 'bg-lime-200'} transition-all duration-1000 rounded-full cursor-pointer _mobile aspect-square`}
                onClick={() => setActive(state => !state)}>
                {
                    isActive ? (<X size={18} />) : (<Menu size={18} />)
                }
            </div>
            <AnimatePresence mode='wait'>
                {
                    isActive ? (
                        <motion.div
                            className="fixed top-0 right-0 w-full h-screen md:w-96 text-slate-900 bg-lime-200 _menu"
                            variants={anim_menuSlide}
                            initial='initial'
                            animate='enter'
                            exit='exit'
                        >
                            <div className="flex justify-center p-24 md:justify-between _body">
                                <div className="flex flex-col gap-3 mt-20 text-lg _nav">
                                    <div className="relative flex flex-col w-full mb-4 _header">
                                        <p className='font-sans text-sm text-slate-400'>Navigation</p>
                                        <span className='h-[1px] w-full bg-slate-400 rounded-full'></span>
                                    </div>
                                    {
                                        navItems?.map((item, key) => (
                                            <motion.a key={key}
                                                variants={anim_slide}
                                                initial='initial'
                                                animate='enter'
                                                exit='exit'
                                                custom={key}
                                            >
                                                {item?.title}
                                            </motion.a>
                                        ))
                                    }
                                </div>
                            </div>
                            <Curve />
                        </motion.div>
                    ) : null
                }
            </AnimatePresence>
        </>
    )
}

export default NavMobile;