import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const useGSAPHeightChangeListener = () => {
    useEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        // Debounce the resize event
        let resizeTimeout: number;
        const debouncedResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 200);
        };

        // Listen for resize events
        window.addEventListener('resize', debouncedResize);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(resizeTimeout);
        };
    }, []);
}

export default useGSAPHeightChangeListener;