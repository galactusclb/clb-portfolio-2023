import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollingItem from "./ScrollingItem";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollingSection: FC = () => {
	const mainSliderRef = useRef(null);
	const sliderRef = useRef(null);
	const slideItemRefs = useRef<HTMLElement[]>([]);

	useLayoutEffect(() => {
		function createAnimation() {
			if (!sliderRef.current) {
				return;
			}

			// const windowWith = window.innerWidth;
			// const totalWidth =
			// 	slideItemRefs.current?.[0]?.offsetWidth * slideItemRefs.current?.length;
			// const calculateSliderX = totalWidth - windowWith;
			// console.log(calculateSliderX, windowWith, totalWidth);

			const tl = gsap.timeline({
				defaults: {
					ease: "none",
				},
				scrollTrigger: {
					trigger: mainSliderRef.current,
					pin: true,
					start: "top top",
					end: "+=400%",
					scrub: 1,
				},
			});

			tl.to(sliderRef.current, {
				// x: -calculateSliderX,
				x: () => -getCalculatedWidth(),
			});
		}

		ScrollTrigger.refresh();

		const ctx = gsap.context(() => {
			createAnimation();
		}, mainSliderRef);

		return () => ctx.revert();
	}, []);

	const getCalculatedWidth = () => {
		const windowWith = window.innerWidth;
		const totalWidth =
			slideItemRefs.current?.[0]?.offsetWidth * slideItemRefs.current?.length;
		const calculateSliderX = totalWidth - windowWith;

		return calculateSliderX;
	};

	function addRef<T extends HTMLElement>(el: T | null) {
		if (el && !slideItemRefs.current.includes(el)) {
			slideItemRefs.current.push(el);
		}
	}

	return (
		<section
			ref={mainSliderRef}
			id="main-slider-container"
			className="flex w-full h-screen relative overflow-hidden mt-56"
		>
			<div
				ref={sliderRef}
				id="slider-container"
				className="absolute flex items-center h-screen w-fit min-w-full"
			>
				{/* <div
					ref={addRef}
					className="w-screen min-w-[100vw] h-full relative flex items-center justify-center text-yellow-400 text-9xl border border-slate-200"
				>
					0
				</div> */}
				<ScrollingItem title="1" ref={addRef} />
				<ScrollingItem title="2" ref={addRef} />
				<ScrollingItem title="3" ref={addRef} />
				<ScrollingItem title="4" ref={addRef} />
				<ScrollingItem title="5" ref={addRef} />
			</div>
		</section>
	);
};

export default HorizontalScrollingSection;
