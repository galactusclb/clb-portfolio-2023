import { forwardRef, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollingItemProps {
	title: string;
}

const ScrollingItem = forwardRef<HTMLDivElement, ScrollingItemProps>(
	({ title }, ref) => {
		const wrapper = useRef(null);

		useLayoutEffect(() => {
			const ctx = gsap.context(() => {
				setInitialState();
				createAnimation();
			}, wrapper);

			return () => ctx.revert();
		}, []);

		function setInitialState() {
			gsap.set(" span", {
				y: 50,
				opacity: 0,
			});
		}

		function createAnimation() {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					markers: true,
					scrub: 1,
				},
			});

			tl.to(" span", {
				y: 0,
				opacity: 1,
				duration: 4,
			});
		}

		return (
			<div
				ref={ref}
				className="w-screen min-w-[100vw] h-full relative flex items-center justify-center text-yellow-400 text-9xl border border-slate-200 snap-center"
			>
				<div className="bg-red-400" ref={wrapper}>
					<span>{title}</span>
				</div>
			</div>
		);
	}
);

export default ScrollingItem;
