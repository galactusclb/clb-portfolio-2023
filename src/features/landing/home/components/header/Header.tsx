import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC, useRef } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './header-nav/HeaderNav';


const Header: FC = () => {

    const headerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        const navLinks = gsap.utils.toArray('.nav-link')

        tl.from(['.logo', navLinks], {
            delay: 2,
            stagger: {
                amount: 0.4,
            },
            y: 20,
            opacity: 0
        })

    }, {
        scope: headerRef
    })

    return (
        <header ref={headerRef} className='fixed z-20 flex justify-between w-full gap-10 px-3 lg:px-32 top-5'>
            <HeaderLogo />
            <HeaderNav />
        </header>
    )
}

export default Header;