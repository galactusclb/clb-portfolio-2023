import { FC, ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

interface RevealHeadingProps {
    className?: string,
    children: ReactNode
}

const RevealHeading: FC<RevealHeadingProps> = ({ className, children }) => {
    const splitTextRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (splitTextRef.current) {
            const splitType = new SplitType(splitTextRef.current, {
                types: "chars",
                // wordClass: "spanGlobal",
                // tagName: "span"
            })

            const tl = gsap.timeline({ paused: true }).fromTo(
                splitType.chars,
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
                start: "top 85%",
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.reverse(),
            })
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