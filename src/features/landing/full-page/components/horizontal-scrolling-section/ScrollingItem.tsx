import { forwardRef, useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "assets/images/Photo1.jpg";

gsap.registerPlugin(ScrollTrigger);

type member = {
	name: string;
	role: string;
	image: string;
};

interface ScrollingItemProps {
	member: member;
	onClick?: () => void;
	timeline: gsap.core.Timeline | null;
}

const ScrollingItem = forwardRef<HTMLDivElement, ScrollingItemProps>(
	({ member, onClick, timeline }, ref) => {
		const wrapper = useRef<HTMLDivElement>(null);
		const imgRef = useRef<HTMLImageElement>(null);

		const createAnimation = useCallback(() => {
			if (!timeline) return

			const tl = gsap.timeline({
				scrollTrigger: {
					containerAnimation: timeline,
					trigger: wrapper.current,
					markers: true,
					scrub: 1,
				},
			});

			tl.to(" h4", {
				y: 0,
				opacity: 1,
				duration: 4,
			});
		}, [timeline]);

		useLayoutEffect(() => {
			// const ctx = gsap.context(() => {
			// 	setInitialState();
			// 	createAnimation();
			// }, wrapper);

			// return () => ctx.revert();
			// const childTl = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: wrapper.current,
			// 		containerAnimation: timeline,
			// 		scrub: true,
			// 	},
			// });
			console.log(timeline);

			if (timeline) {
				// check if timeline is not null
				const childTl = gsap.timeline({
					scrollTrigger: {
						trigger: wrapper.current,
						containerAnimation: timeline, // pass the parent timeline here
						start: "left 80%",
						toggleActions: "restart none none reset",
						// scrub: true,
						markers: true,
					},
				});

				setInitialState();

				childTl.to(imgRef.current, {
					// xPercent: 50,
					duration: 1,
					x: 0,
					opacity: 1,
					scale: 1,
					// delay: -1.5,
					ease: "power2",
				});

				return () => {
					childTl.kill();
				};
			}
			// return () => {
			// 	childTl.kill();
			// };
			// }, [createAnimation]);
		}, [timeline]);

		function setInitialState() {
			gsap.set(imgRef.current, {
				x: 150,
				opacity: 0,
				scale: 1.3,
			});
		}

		return (
			<div
				ref={ref}
				onClick={onClick}
				className="relative flex flex-col items-start justify-center overflow-hidden rounded-lg borde border-slate-200 snap-center"
			>
				<div className="w-[360px] h-[420px] overflow-hidden " ref={wrapper}>
					<img
						ref={imgRef}
						src={member?.image}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>
				<h4 className="mt-4 text-4xl text-white">{member?.name}</h4>
				<p className="mt-3 text-2xl text-white">{member?.role}</p>
			</div>
		);
	}
);

export default ScrollingItem;
