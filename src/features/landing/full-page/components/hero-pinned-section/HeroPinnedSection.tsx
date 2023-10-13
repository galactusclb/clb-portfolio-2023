import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Photo1 from "@images/Photo1.jpg";
import Photo2 from "@images/Photo2.jpg";
import Photo3 from "@images/Photo3.jpg";
import Photo4 from "@images/Photo4.jpg";
import Photo5 from "@images/Photo5.jpg";
import Photo6 from "@images/Photo6.jpg";
import Photo7 from "@images/Photo7.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroPinnedSection: FC = () => {
	const heroRef = useRef<HTMLElement>(null);

	const heroImageRefs = useRef<HTMLImageElement[]>([]);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			setInitialState();
			createIntro();
			createHeroParallaxScroll();
		}, heroRef);

		return () => {
			ctx.revert();
		};
	}, []);

	function setInitialState() {
		gsap.set(" .hero__title span", {
			y: 32,
			opacity: 0,
		});

		gsap.set(" .hero_images img", {
			opacity: 0,
			y: gsap.utils.random(100, 50),
		});
	}

	function createIntro() {
		const tl = gsap.timeline();

		tl.to(" .hero__title div", {
			opacity: 1,
			delay: 0.5,
		})
			.to(" .hero__title span", {
				opacity: 1,
				y: 0,
				ease: "expo.out",
				duration: 2,
				stagger: 0.05,
			})
			.to(
				" .hero_images img",
				{
					opacity: 1,
					y: 0,
					ease: "power3.out",
					duration: 2,
					stagger: 0.05,
				},
				2.5
			);
	}

	// heroImageRefs
	const addImageRef = (el: HTMLImageElement) => {
		if (el && !heroImageRefs.current.includes(el)) {
			heroImageRefs.current.push(el);
		}
	};

	function createHeroParallaxScroll() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: heroRef.current,
				start: "top top",
				end: "bottom top",
				scrub: 1,
			},
		});

		heroImageRefs.current.forEach((img) => {
			tl.to(
				img,
				{
					ease: "none",
					yPercent: gsap.utils.random(-100, -50),
				},
				0
			);
		});
	}

	return (
		<section
			ref={heroRef}
			className="hero grid place-items-center h-[129.8rem] bg-white"
		>
			<h1 className="hero__title text-center max-w-[10ch] z-[2] mix-blend-difference text-white text-[16rem] font-medium tracking-tight leading-none">
				<div className="flex items-center justify-center" data-hidden>
					<span>O</span>
					<span>u</span>
					<span>t</span>
					<span>d</span>
					<span>o</span>
					<span>o</span>
					<span>r</span>
				</div>
				<div className="flex items-center justify-center" data-hidden>
					<span>T</span>
					<span>o</span>
					<span>n</span>
					<span>e</span>
					<span>s</span>
				</div>
			</h1>

			<div className="hero_images">
				<img
					ref={addImageRef}
					src={Photo1}
					alt=""
					className="absolute w-[37.4rem] h-[56.1rem] top-0 left-32"
					data-hidden
				/>
				<img
					ref={addImageRef}
					src={Photo2}
					alt=""
					className="absolute w-[24.1rem] h-[6.6rem] top-0 left-[61.1rem]"
					data-hidden
				/>
				<img
					ref={addImageRef}
					src={Photo3}
					alt=""
					className="absolute w-[35.1rem] h-[23.4rem] top-0 right-32"
					data-hidden
				/>
				<img
					ref={addImageRef}
					src={Photo4}
					alt=""
					className="absolute w-[37.4rem] h-[55.9rem] top-[16.8rem] right-[47.8rem]"
					data-hidden
				/>
				<img
					ref={addImageRef}
					src={Photo5}
					alt=""
					className="absolute w-[35.1rem] h-[23.4rem] top-[65.9rem] left-[47.8rem]"
					data-hidden
				/>
				<img
					ref={addImageRef}
					src={Photo6}
					alt=""
					className="absolute w-[24.1rem] h-[36.1rem] top-[93.7rem] left-[21.3rem]"
					data-hidden
				/>
				<img
					ref={addImageRef}
					src={Photo7}
					alt=""
					className="absolute w-[63.9rem] h-[42.5rem] top-[81.5rem] right-[8rem]"
					data-hidden
				/>
			</div>
		</section>
	);
};

export default HeroPinnedSection;
