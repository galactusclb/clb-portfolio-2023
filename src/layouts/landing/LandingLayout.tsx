import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useLayoutEffect } from "react";

import { HomePageWrapper } from "features/landing/full-page";

import { HomePageContextProvider } from "./context/HomeWrapperProvider";

gsap.registerPlugin(ScrollTrigger);

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => {
	// const [width, height] = useWindowSize();

	useLayoutEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
		});

		// lenis.on("scroll", (e) => {
		// 	console.log(e);

		// 	addScrewScrollEffect(e);
		// });

		function raf(time?: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		function activateLenis() {
			requestAnimationFrame(raf);
		}

		activateLenis();

		window.addEventListener("resize", activateLenis);

		return () => {
			lenis.destroy();
			window.removeEventListener("resize", activateLenis);
			// cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<HomePageContextProvider>
			<HomePageWrapper />
		</HomePageContextProvider>
	);
};

export default LandingLayout;
