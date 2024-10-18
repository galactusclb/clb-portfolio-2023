import { Link } from '@components/ui';
import { useGSAP } from '@gsap/react';
import { useWindowSize } from '@hooks/index';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, ReactNode, useRef } from 'react';
import { ArrowUpRight } from 'react-feather';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)

interface LinkWrapperProps {
    title: ReactNode
}

const LinkWrapper: FC<LinkWrapperProps> = ({ title }) => {

    const linkRef = useRef(null)
    const timeline = useRef<gsap.core.Timeline | null>(null)
    const splitTextRef = useRef<HTMLDivElement>(null)
    const timeoutId = useRef<number>()

    const windowWidth = useWindowSize()

    const { contextSafe } = useGSAP(() => {
        timeline.current = gsap.timeline({ paused: true })

        revealAnimation()
        iconHoverAnimation(timeline.current)

        return (() => {
            clearTimeout(timeoutId.current)
        })
    }, {
        scope: linkRef,
        dependencies: [windowWidth]
    })

    function iconHoverAnimation(timeline?: gsap.core.Timeline) {
        timeline
            ?.to('._icon-wrapper .arrow-1', {
                top: '-100%',
                duration: 0.4,
                ease: 'power3.in'

            }, 'enter')
            .to('._icon-wrapper .arrow-2', {
                top: '15%',
                duration: 0.4,
                ease: 'power3.in'
            }, 'enter')

        timeline
            ?.to('._icon-wrapper .arrow-1', {
                top: '0%'
            }, 'exit')
            .to('._icon-wrapper .arrow-2', {
                top: '100%'
            }, 'exit')
    }

    function revealAnimation() {
        if (!splitTextRef.current) return

        const splitTypeRef = new SplitType(splitTextRef.current, {
            types: "chars"
        })

        const tl = gsap.timeline({
            paused: true,
        })
            .fromTo(
                splitTypeRef.chars,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    duration: 0.8,
                    opacity: 1,
                    stagger: { amount: 0.4 }
                }
            )
            .fromTo('._icon-wrapper', { y: 20, opacity: 0 }, {
                y: 0,
                delay: 0.2,
                duration: 0.8,
                opacity: 1,
            }, 0)

        ScrollTrigger.create({
            trigger: splitTextRef.current,
            start: 'top 75%',
            onEnter: () => tl.play(),
            onLeaveBack: () => tl.reverse(),
            invalidateOnRefresh: true
        })
    }

    const handleMouseEnter = contextSafe(() => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
            timeoutId.current = undefined
        }
        timeline.current?.tweenFromTo('enter', 'exit')
    })

    const handleMouseLeave = contextSafe(() => {
        timeoutId.current = setTimeout(() => {
            timeline.current?.play()
        }, 300);
    })

    return (
        <Link
            ref={linkRef}
            className='gap-2 px-0 cursor-pointer group w-fit'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className='relative tracking-wide uppercase duration-200 _reveal_text whitespace-nowrap w-fit'
                ref={splitTextRef}
                style={{ fontKerning: 'none', willChange: 'transform' }}
            >
                {title}
            </div>
            <div className="relative flex items-center justify-center overflow-hidden font-sans text-white duration-200 bg-black rounded-full _icon-wrapper w-7 h-7">
                <ArrowUpRight size={18} className='relative arrow-1' />
                <ArrowUpRight size={18} className='absolute top-full arrow-2' />
            </div>
        </Link>
    )
}

export default LinkWrapper;