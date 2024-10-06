import { FC, ReactNode, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

interface RevealHeadingProps {
    className?: string,
    children: ReactNode,
    orientation?: 'horizontal' | 'vertical'
}

const RevealHeading: FC<RevealHeadingProps> = ({ className, children, orientation = 'vertical' }) => {
    const splitTextRef = useRef<HTMLDivElement>(null)
    const splitTypeRef = useRef<SplitType | null>(null)

    const scrollOrientationStartValue = orientation === 'vertical' ? 'top 75%' : 'left 75%'

    useGSAP(() => {
        if (!splitTextRef.current) return

        splitTypeRef.current = new SplitType(splitTextRef.current, {
            types: "chars",
            // wordClass: "spanGlobal",
            // tagName: "span"
        })

        const tl = gsap.timeline({
            paused: true,
        }).fromTo(
            splitTypeRef.current.chars,
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                duration: 0.8,
                opacity: 1,
                stagger: {
                    amount: 0.4
                }
            }
        )

        ScrollTrigger.create({
            trigger: splitTextRef.current,
            start: scrollOrientationStartValue,
            // markers: true,
            horizontal: orientation === 'horizontal',
            onEnter: () => tl.play(),
            onLeaveBack: () => tl.reverse(),
        })
    }, {
        scope: splitTextRef
    })

    useEffect(() => {
        const handleResize = () => {
            if (splitTypeRef.current && splitTextRef.current) {
                splitTypeRef.current.revert()
                splitTypeRef.current.split({ types: "chars" })
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            ref={splitTextRef}
            id='splitText'
            className={className}
            style={{ fontKerning: 'none', willChange: 'transform' }}>
            {children}
        </div>
    )
}

export default RevealHeading;