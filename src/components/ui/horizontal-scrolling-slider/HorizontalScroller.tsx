import { FC, ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HorizontalScrollerProps {
	children: ReactNode;
}

const HorizontalScroller: FC<HorizontalScrollerProps> = ({ children }) => {
	const triggerRef = useRef<HTMLDivElement | null>(null);
	const sectionRef = useRef<HTMLDivElement | null>(null);

	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			if (sectionRef.current && sectionRef.current) {
				console.log(children);

				const windowWidth = window.innerWidth;
				const childrenAmount = sectionRef.current.children?.length;
				const childWidth = (sectionRef.current.children?.[0] as HTMLElement)
					?.offsetWidth;

				// const getCalculateSliderX = () => {
				// 	return childrenAmount * childWidth - windowWidth;
				// };

				// console.log(getCalculateSliderX());
				const calculateSliderX = childrenAmount * childWidth - windowWidth;
				console.log(calculateSliderX);

				const getScrollAmount = () => {
					const racesWidth = sectionRef?.current?.scrollWidth;
					console.log(racesWidth);

					return -(racesWidth - window.innerWidth);
				};

				pin = gsap.fromTo(
					sectionRef.current,
					{
						translateX: 0,
					},
					{
						// translateX: "-300vw",
						// translateX: -calculateSliderX,
						translateX: getScrollAmount,
						ease: "none",
						duration: 1,
						scrollTrigger: {
							trigger: triggerRef.current,
							start: "top 10%",
							// end: "2000 top",
							// end: `${calculateSliderX} bottom`,
							end: () => `+=${getScrollAmount() * -1}`,
							scrub: 1,
							pin: true,
							markers: true,
							invalidateOnRefresh: true,
						},
					}
				);

				// const tween = gsap.to(sectionRef.current, {
				// 	translateX: getScrollAmount,
				// 	// x: getScrollAmount,
				// 	ease: "none",
				// });

				// ScrollTrigger.create({
				// 	trigger: triggerRef.current,
				// 	start: "top 10%",
				// 	end: () => `+=${getScrollAmount() * -1}`,
				// 	pin: true,
				// 	animation: tween,
				// 	scrub: 1,
				// 	invalidateOnRefresh: true,
				// 	markers: true,
				// });
			}
		});

		return () => {
			console.log("clear gsap");
			ctx.revert();
		};
	}, [children, sectionRef?.current?.scrollWidth]);

	return (
		<section className="overflow-hidden">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="relative flex flex-row h-screen overflow-hidden w-fit"
				>
					{children}
					{/* <div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-green-400">
							<h1 className="font-extrabold text-9xl">old money</h1>
						</div> */}
				</div>
			</div>
		</section>
	);
};

export default HorizontalScroller;
