import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollingItem from "./ScrollingItem";

import Photo1 from "@images/Photo1.jpg";
import Photo2 from "@images/Photo2.jpg";
import Photo3 from "@images/Photo3.jpg";
import Photo4 from "@images/Photo4.jpg";
import Photo5 from "@images/Photo5.jpg";
import Photo6 from "@images/Photo6.jpg";
import Photo7 from "@images/Photo7.jpg";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollingSection: FC = () => {
	const mainSliderRef = useRef(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const slideItemRefs = useRef<HTMLElement[]>([]);

	const [items, setItems] = useState([
		{
			name: "John Doe",
			role: "Designer",
			image: Photo1,
		},
		{
			name: "John Doe",
			role: "Designer",
			image: Photo2,
		},
		{
			name: "John Doe",
			role: "Designer",
			image: Photo3,
		},
		{
			name: "John Doe",
			role: "Designer",
			image: Photo4,
		},
		{
			name: "John Doe",
			role: "Designer",
			image: Photo5,
		},
		{
			name: "John Doe",
			role: "Designer",
			image: Photo6,
		},
		{
			name: "John Doe",
			role: "Designer",
			image: Photo7,
		},
	]);

	const tl = useRef<gsap.core.Timeline | null>(null);
	const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

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

			tl.current = gsap.timeline({
				defaults: {
					ease: "none",
				},
				scrollTrigger: {
					trigger: mainSliderRef.current,
					pin: true,
					start: "top top",
					end: "+=400%",
					scrub: 1,
					// markers: true,
				},
			});

			tl.current.to(sliderRef.current, {
				// x: -calculateSliderX,
				x: () => -getCalculatedWidth(),
			});
		}

		ScrollTrigger.refresh();

		const ctx = gsap.context(() => {
			createAnimation();
			console.log(tl.current);

			setTimeline(tl.current);
		}, mainSliderRef);

		return () => ctx.revert();
	}, [items]);

	const getCalculatedWidth = () => {
		const windowWith = window.innerWidth;

		//? get scrolling total using children width
		// const totalWidth =
		// 	slideItemRefs.current?.[0]?.offsetWidth * slideItemRefs.current?.length;

		//? get scrolling total using wrapper children width (otherwise gap is between children not calculated)
		const wrapperWidth = sliderRef.current?.offsetWidth ?? 0;
		const mainWrapperLeftPadding = 200;

		const totalWidth = wrapperWidth + mainWrapperLeftPadding + 500;

		const calculateSliderX = totalWidth - windowWith;
		console.log(totalWidth, windowWith, calculateSliderX);

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
			className="flex w-full h-screen relative overflow-hidden mt-56 bg-slate-900 pt-24 ps-32"
		>
			<h3 className="text-white text-9xl z-10">MEET THE TEAM</h3>
			<div
				ref={sliderRef}
				id="slider-container"
				className="absolute flex items-cente gap-24 bottom-24 w-fit min-w-full snap-x ms-96"
			>
				{items?.map((item, index) => {
					return (
						<ScrollingItem
							key={index}
							member={item}
							ref={addRef}
							timeline={timeline}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default HorizontalScrollingSection;
