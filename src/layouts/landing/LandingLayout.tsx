import Lenis from "@studio-freight/lenis";
import { FC, useEffect, useLayoutEffect } from "react";

import { useWindowSize } from "hook";

import { HomePageWrapper } from "features/landing/full-page";

import { HomePageContextProvider } from "./context/HomeWrapperProvider";

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => {
	// const [width, height] = useWindowSize();

	// useLayoutEffect(() => {
	// 	console.log(height);

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

	// 	requestAnimationFrame(raf);

	// 	return () => {
	// 		lenis.destroy();
	// 		// cancelAnimationFrame(raf);
	// 	};
	// }, [height]);

	return (
		<HomePageContextProvider>
			<HomePageWrapper />
		</HomePageContextProvider>
	);
};

export default LandingLayout;
