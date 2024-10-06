import { FC, useRef } from 'react'
import img from "@images/home/propic-800-min.png";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageWrapper from '../common/ImageWrapper';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: FC = () => {

    const containerRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        const heading = new SplitType('h1', { types: 'chars' })

        tl.from(heading.chars, {
            delay: 0.6,
            stagger: {
                amount: 0.4
            },
            y: 80,
            opacity: 0
        })
            .from('.hero-pic-outline', {
                opacity: 0,
                width: 0,
                delay: 0.5,
                ease: "power2.in"
            })
            .from('.hero-pic-wrapper', {
                height: 0,
                delay: 0.3
            })
            .to('.hero-pic-outline', {
                rotate: 10,
                ease: "slow(0.7,0.7,false)",
                repeat: -1,
                duration: 5,
                yoyo: true
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
                scrub: true
            }
        });
    }, {
        scope: containerRef
    })

    return (
        <section ref={containerRef} className='relative flex items-center justify-center h-screen'>
            <div className='relative flex flex-col gap-10 md:block'>
                <h1 className='flex text-7xl lg:text-[15rem] 2xl:text-[19rem]'>
                    HELLOW
                </h1>

                <ImageWrapper
                 image={img}
                 className='-translate-x-1/2 sm:-translate-y-1/2 md:absolute top-1/2 left-1/2'
                 />

            </div>
        </section>
    )
}

export default HeroSection;