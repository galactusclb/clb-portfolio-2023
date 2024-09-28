import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC, useRef } from 'react'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {

  const headerLogo = useRef<HTMLDivElement>(null)
  const headerLinks = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    if (headerLogo.current && headerLinks.current?.children) {
      tl.from([headerLogo.current, headerLinks.current?.children], {
        delay: 1.5,
        stagger: {
          amount: 0.4,
        },
        y: 20,
        opacity: 0
      })
    }
  }, [])

  return (
    <header className='absolute z-30 flex items-center justify-between w-full px-6 py-4'>
      <div ref={headerLogo} className='cursor-pointer'>
        <h2 className='text-xl font-bold'>
          PLTU
        </h2>
      </div>
      <div ref={headerLinks} className="flex text-xs gap-x-6 sm:gap-x-10 sm:text-sm lg:text-base">
        <div className="cursor-pointer">
          <p>About</p>
        </div>
        <div className="cursor-pointer">
          <p>Projects</p>
        </div>
        <div className="cursor-pointer">
          <p>Contact</p>
        </div>
      </div>
    </header>
  )
}

export default Header;