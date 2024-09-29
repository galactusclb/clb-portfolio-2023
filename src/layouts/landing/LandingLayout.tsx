import { FC } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HomePageWrapper } from "@features/landing/full-page";

import { HomePageContextProvider } from "./context/HomeWrapperProvider";
import { PlutoPageWrapper } from "@features/landing/pluto-page";
import SmoothScroller from "@components/shared/SmoothScroller";

gsap.registerPlugin(ScrollTrigger);

interface LandingLayoutProps { }

const LandingLayout: FC<LandingLayoutProps> = () => {
	// const [width, height] = useWindowSize();

	// useLayoutEffect(() => {
	// 	const lenis = new Lenis({
	// 		lerp: 0.1,
	// 	});

	// 	// lenis.on("scroll", (e) => {
	// 	// 	console.log(e);

	// 	// 	addScrewScrollEffect(e);
	// 	// });

	// 	function raf(time?: number) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}

	// 	function activateLenis() {
	// 		requestAnimationFrame(raf);
	// 	}

	// 	activateLenis();

	// 	window.addEventListener("resize", activateLenis);

	// 	return () => {
	// 		lenis.destroy();
	// 		window.removeEventListener("resize", activateLenis);
	// 		// cancelAnimationFrame(raf);
	// 	};
	// }, [height]);
	// }, []);

	return (
		<HomePageContextProvider>
			<SmoothScroller >
				{/* <HomePageWrapper /> */}
				<PlutoPageWrapper />
			</SmoothScroller>
		</HomePageContextProvider>
	);
};

export default LandingLayout;
