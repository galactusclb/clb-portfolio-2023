import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: FC = () => {

    const containerRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        const heading = new SplitType('h1.hero-text', { types: 'chars' })
        
        tl
            .from(heading.chars, {
                delay: 1,
                stagger: {
                    amount: 0.4
                },
                y: 80,
                opacity: 0
            })

        gsap.fromTo(heading.chars, {
            y: 0
        }, {
            y: (i) => {
                if (i % 2 === 0) {
                    return gsap.utils.random(200, 0)
                }
                return gsap.utils.random(-500, 0)
            },
            stagger: {
                amount: 0.1
            },
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    }, {
        scope: containerRef
    })

    return (
        <section ref={containerRef} className='relative flex items-center justify-center h-screen'>
            <div className='relative flex flex-col gap-10 md:block'>
                <h1 className='hero-text flex text-7xl md:text-9xl lg:text-[15rem] 2xl:text-[19rem]'>
                    Works
                </h1> 
            </div>
        </section>
    )
}

export default HeroSection;