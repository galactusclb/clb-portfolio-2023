import { FC, ReactNode } from 'react'
import { } from 'lenis'
import { ReactLenis } from '@studio-freight/react-lenis'

interface SmoothScrollerProps {
    children: ReactNode
}

const SmoothScroller: FC<SmoothScrollerProps> = ({ children }) => {
    return (
        <ReactLenis root options={{
            lerp: 0.08
        }}>{children}</ReactLenis>
    )
}

export default SmoothScroller;