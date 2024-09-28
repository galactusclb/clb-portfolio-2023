import { SectionTitle } from '@components/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC, useRef } from 'react'
import SplitType from 'split-type';

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {

    const h1Ref = useRef<HTMLHeadingElement>(null)
    const pRef = useRef<HTMLParagraphElement>(null)
    const imagesRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline();
        if (h1Ref?.current && pRef?.current && imagesRef?.current?.children) {
            const text = new SplitType(h1Ref?.current, { types: "chars" })
            const text2 = new SplitType(pRef?.current, { types: "words" })

            tl.from(text.chars, {
                delay: 1.6,
                stagger: {
                    amount: 0.4
                },
                y: 20,
                opacity: 0,
            }).from(text2.words, {
                stagger: {
                    amount: 0.4
                },
                y: 5,
                opacity: 0
            })
                .from(
                    imagesRef?.current?.children, {
                    height: 0,
                    stagger: {
                        amount: 0.4
                    }
                },
                    "<"
                )
        }
    }, [])

    return (
        <div className='flex flex-col items-center justify-between w-full h-screen gap-5 px-5'>
            <div className="flex flex-col items-center gap-2 pt-28 justify-content md:gap-10 w-fit">
                {/* <SectionTitle title='Pluto'/> */}
                <h1
                    ref={h1Ref}
                    // style={{fontFamily: 'Monument'}}
                    className='leading-[.8] w-full text-left sm:text-center uppercase flex flex-row text-[16vw] md:text-[22vw] font-extrabold'>
                    Pluto
                </h1>
                <p ref={pRef} className='text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio placeat deleniti quasi veniam fuga error doloremque ipsum,
                    tenetur provident soluta laboriosam totam harum minima aliquid cum nam quos perferendis, eius mollitia blanditiis vel a corporis. Ratione adipisci
                    fugit sint ipsum saepe ex explicabo inventore.
                </p>
            </div>
            <div ref={imagesRef} className="grid items-end w-full grid-cols-5 gap-2 pb-5 sm:gap-4">
                <div className="col-span-3 h-[20vh] sm:h-[40vh] bg-orange-400 rounded-md overflow-hidden">
                    {/* <img src="" alt="" className='object-cover object-center w-full h-full' /> */}
                </div>
                <div className="col-span-5 sm:col-span-2 h-[30vh] bg-green-400 rounded-md overflow-hidden">
                    {/* <img src="" alt="" className='object-cover object-center w-full h-full' /> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection;