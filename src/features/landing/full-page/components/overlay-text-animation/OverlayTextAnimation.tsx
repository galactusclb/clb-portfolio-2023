import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextBlock from "./TextBlock";

gsap.registerPlugin(ScrollTrigger);

interface OverlayTextAnimationProps {
	disableTextMovingAnimation?: boolean;
}

const OverlayTextAnimation: FC<OverlayTextAnimationProps> = ({
	disableTextMovingAnimation = false,
}) => {
	const lines: string[] = [
		"Outdoor Tones is committed to motivating everyone to embrace",
		"the outdoors. We believe that seeking the thrill of outdoor",
		"exploration is key to our health. That's why we're",
		"empowering you to feel confident, vibrant, and primed for",
		"#OutdoorLiving at its finest.",
	];

	const textBlockRef = useRef<HTMLElement>(null);
	const revealPRefs = useRef<HTMLDivElement[]>([]);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			createTextAnimation();
		});

		return () => {
			ctx.revert();
		};
	}, []);

	function createTextAnimation() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: textBlockRef.current,
				start: "tot 40%",
				// end: "bottom 40%",
				// end: "bottom top+100",
				end: "+=2500",
				scrub: 2,
				pin: true,
				markers: true,
			},
		});

		revealPRefs.current.forEach((text, index) => {
			const overlay = text?.children?.[0];
			const content = text?.children?.[1];

			!disableTextMovingAnimation && setInitialState(text);

			tl.to(overlay, {
				scaleX: 0,
			});

			if (!disableTextMovingAnimation) {
				tl.to(
					text,
					{
						y: 0,
						opacity: 1,
						ease: "expo-out",
						// duration: 2,
						delay: () => index * 0.1,
					},
					0
				);
			}
		});
	}

	function setInitialState(target: any) {
		gsap.set(target, {
			y: 32,
			opacity: 0,
		});
	}

	const addRevealPRefs = (el: HTMLDivElement) => {
		if (el && !revealPRefs.current.includes(el)) {
			revealPRefs.current.push(el);
		}
	};

	return (
		<section
			ref={textBlockRef}
			className="flex items-center text-block px-28 my-96"
		>
			<div className="">
				{lines?.map((line, key) => {
					return <TextBlock key={key} title={line} ref={addRevealPRefs} />;
				})}
			</div>
		</section>
	);
};

export default OverlayTextAnimation;
