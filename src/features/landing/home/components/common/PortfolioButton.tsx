import { useGSAP } from '@gsap/react'
import { cn } from '@utils/tailwindMergeHelper'
import { cva, VariantProps } from 'class-variance-authority'
import gsap from 'gsap'
import { FC, MouseEvent, ReactNode, useRef } from 'react'

export const portfolioButtonVariants = cva(
    'w-fit whitespace-nowrap overflow-hidden group border cursor-pointer relative flex items-center justify-center px-[60px] py-4',
    {
        variants: {
            variant: {
                primary: 'border-slate-400',
                dark: 'border-white hover:text-slate-800'
            },
            shape: {
                default: 'rounded-[3em]',
                rounded: 'rounded-full aspect-square'
            }
        },
        defaultVariants: {
            variant: 'primary',
            shape: 'default'
        }
    }
)

interface PortfolioButtonProps extends VariantProps<typeof portfolioButtonVariants> {
    className?: string;
    backgroundColor?: string;
    children?: ReactNode
}

const PortfolioButton: FC<PortfolioButtonProps> = ({
    backgroundColor = '#455CE9',
    children,
    shape,
    variant,
    className,
    ...attributes
}) => {

    const buttonWrapperRef = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    const timeoutId = useRef<number>()

    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })

        tl.current.to('.circle', {
            top: "-25%",
            width: '150%',
            duration: 0.4,
            ease: 'power3.in'
        }, 'enter')

        tl.current.to('.circle', {
            top: "-150%",
            width: '125%',
            duration: 0.25,
        }, 'exit')

        return(()=>{
            clearTimeout(timeoutId.current)
        })
    }, {
        scope: buttonWrapperRef
    })

    const handleMouseEnter = contextSafe((e: MouseEvent<HTMLElement>) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
            timeoutId.current = undefined
        }
        tl.current?.tweenFromTo('enter', 'exit')
    })

    const handleMouseLeave = contextSafe((e: MouseEvent<HTMLElement>) => {
        timeoutId.current = setTimeout(() => {
            tl.current?.play()
        }, 300);
    })

    return (
        <div
            {...attributes}
            ref={buttonWrapperRef}
            className={cn(portfolioButtonVariants({ shape, variant, className }))}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className='relative z-[1] transition-colors ease-linear duration-[400ms]'>
                {children}
            </p>
            <div
                // style={{ backgroundColor }}
                className="circle w-full h-[150%] bg-lime-200 absolute rounded-[50%] top-full"></div>
        </div>
    )
}

export default PortfolioButton;