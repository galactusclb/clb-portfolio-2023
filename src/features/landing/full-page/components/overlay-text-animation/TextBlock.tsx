import { ReactNode, forwardRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface TextBlockProps {
	title: ReactNode;
}

const TextBlock = forwardRef<HTMLDivElement, TextBlockProps>(
	({ title }, text__effectRef) => {
		// useLayoutEffect(() => {
		// 	if (
		// 		text__effectRef &&
		// 		typeof text__effectRef !== "function" &&
		// 		text__effectRef.current
		// 	) {
		// 		const ctx = gsap.context(() => {
		// 			setInitialState();
		// 		}, text__effectRef.current);

		// 		return () => ctx.revert();
		// 	}
		// }, []);

		// function setInitialState() {
		// 	gsap.set(" p", {
		// 		y: 32,
		// 		opacity: 0,
		// 	});
		// }

		return (
			<div ref={text__effectRef} className="relative text__effect">
				<div className="text__overlay block absolute h-[101%] w-full top-0 left-0 bg-white opacity-70 origin-center-right"></div>
				<p className="text-6xl leading-relaxed font-[Inter] font-medium">
					{title}
				</p>
			</div>
		);
	}
);

export default TextBlock;
