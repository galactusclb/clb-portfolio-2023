import { motion } from 'framer-motion';
import { FC } from 'react';
import { curvePathAnimation } from './Animations';

const Curve: FC = () => {

    return (
        <svg className='_svgCurve absolute top-0 -left-[99px] w-[100px] h-full fill-lime-200 stroke-none'>
            <motion.path
                variants={curvePathAnimation}
                initial='initial'
                animate='enter'
                exit='exit'
            ></motion.path>
        </svg>
    )
}

export default Curve;