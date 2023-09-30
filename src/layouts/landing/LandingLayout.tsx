import { FC, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// import { HomeContainer } from "features/landing/home";
import { HomePageWrapper } from "features/landing/full-page";

import style from "@styles/layouts/landing-layout.module.scss";

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const skewConfigs = useRef({
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0,
	});

	const SKEW_AMOUNT = 10; // Adjust this value to change the amount of skew

	useEffect(() => {
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

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			// cancelAnimationFrame(raf);
		};
	}, []);

	function addScrewScrollEffect(e) {
		// skewConfigs.current.current = e?.scroll?.y;
		// skewConfigs.current.current = e?.targetScroll;
		skewConfigs.current.current = window.scrollY;
		skewConfigs.current.previous +=
			(skewConfigs.current.current - skewConfigs.current.previous) *
			skewConfigs.current.ease;
		skewConfigs.current.rounded =
			Math.round(skewConfigs.current.previous * 100) / 100;

		const difference =
			skewConfigs.current.current - skewConfigs.current.rounded;
		const acceleration = difference / window.innerWidth;
		const velocity = +acceleration;
		const skew = velocity * SKEW_AMOUNT;

		if (scrollContainerRef.current) {
			scrollContainerRef.current.style.transform = `translate3d(0, -${skewConfigs.current.rounded}px, 0) skewY(${skew}deg)`;
		}
	}

	// return <HomeContainer />;
	return (
		// <div className={`${style["main-wrapper"]}`}>
		// 	<div ref={scrollContainerRef}>
		<HomePageWrapper />
		// 	</div>
		// </div>
	);
};

export default LandingLayout;
