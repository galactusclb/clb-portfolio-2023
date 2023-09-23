import { FC, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SliderContainer from "./SliderContainer";
import SliderItem from "./SliderItem";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollingSliderProps {}

const HorizontalScrollingSlider: FC<HorizontalScrollingSliderProps> = () => {
	const ref = useRef<HTMLElement | null>(null);
	const imgSliderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (ref.current && imgSliderRef.current) {
			console.log("gg");

			const widowWidth = window.innerWidth;
			console.log(widowWidth);

			const calculateSliderX =
				imgSliderRef.current.children?.length *
					(imgSliderRef.current.children?.[0] as HTMLElement).offsetWidth -
				widowWidth;

			// eslint-disable-next-line no-inner-declarations
			function getScrollAmount() {
				const containerWidth = imgSliderRef.current?.offsetWidth ?? 0;
				console.log(-(containerWidth - widowWidth));

				return -(containerWidth - widowWidth);
			}

			// const imgSliderTimeline = gsap.timeline({
			// 	defaults: {
			// 		ease: "none",
			// 	},
			// 	scrollTrigger: {
			// 		trigger: ref.current,
			// 		pin: true,
			// 		start: "top 20%",
			// 		end: "+=" + getScrollAmount() * -1,
			// 		scrub: 1,
			// 		markers: true,
			// 		invalidateOnRefresh: true,
			// 	},
			// });

			// console.log(getScrollAmount());

			// imgSliderTimeline.to(imgSliderRef.current, {
			// 	x: getScrollAmount(),
			// });
			const tween = gsap.to(imgSliderRef.current, {
				x: getScrollAmount,
				// x: -calculateSliderX,
				duration: 3,
				ease: "none",
			});

			ScrollTrigger.create({
				trigger: ref.current,
				start: "top 20%",
				// start: "top center",
				end: getScrollAmount() * -1,
				// end: () => `+=${getScrollAmount() * -1}`,
				// end: "bottom center",
				pin: true,
				animation: tween,
				scrub: 1,
				invalidateOnRefresh: true,
				markers: true,
			});
		}
	}, []);

	return (
		<section
			ref={ref}
			className="flex overflow-hidden h-screen w-full relative  bg-stone-400"
		>
			<SliderContainer ref={imgSliderRef}>
				<SliderItem title={1} bg={"bg-red-500"} />
				<SliderItem title={2} bg={"bg-blue-500"} />
				<SliderItem title={3} bg={"bg-pink-500"} />
				<SliderItem title={4} bg={"bg-orange-500"} />
				<SliderItem title={5} bg={"bg-purple-500"} />
			</SliderContainer>
		</section>
	);
};

export default HorizontalScrollingSlider;
