import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fullwidthImg from "assets/images/fullwidth.jpg";

gsap.registerPlugin(ScrollTrigger);

interface FullImagePinndSectionProps {}

const FullImagePinndSection: FC<FullImagePinndSectionProps> = () => {
	// const clipPath = `polygon(6% 19%, 92% 11%, 95% 95%, 1% 90%)`;
	// const clipPath = `polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)`;
	const clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`;

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	// const imageRef = useRef<HTMLImageElement | null>(null);

	useLayoutEffect(() => {
		function setInitialState() {
			gsap.set(wrapperRef.current, {
				clipPath,
			});

			gsap.set(" img", {
				scale: 1.3,
			});

			gsap.set(" .fullwidth-image__text", {
				y: 32,
				opacity: 0,
			});
		}

		const ctx = gsap.context(() => {
			setInitialState();
			createPinnedHero();
		}, wrapperRef);

		return () => ctx.revert();
	}, [clipPath]);

	function createPinnedHero() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "top top",
				end: "+=1500",
				scrub: 1,
				pin: true,
				// markers: true,
			},
		});

		tl.to(" .fullwidth-image__overlay", {
			opacity: 0.2,
		})
			.to(
				wrapperRef.current,
				{
					// clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					// clipPath: "polygon(92% 11%, 6% 19%, 1% 90%, 95% 95%)",
					// clipPath: "polygon(6% 19%, 92% 11%, 95% 95%, 1% 90%)",
					clipPath: `polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)`,
				},
				0
			)
			.to(
				" img",
				{
					scale: 1,
				},
				0
			)
			.to(
				" .fullwidth-image__text",
				{
					y: 0,
					opacity: 1,
				},
				0
			);
	}

	return (
		<div
			ref={wrapperRef}
			className={`relative h-screen overflow-hidden max-w-[100vw] bg-red-200 fullwidth-image`}
			style={{ clipPath }}
		>
			<div className="fullwidth-image__overlay absolute inset-0 z-[2] bg-slate-900 opacity-0"></div>

			<div className="fullwidth-image__text absolute -translate-x-1/2 left-1/2 top-1/2 z-[3]">
				<h2 className="mb-10 text-slate-50 text-8xl">2023 collection</h2>
				<p className="text-4xl text-slate-50 max-w-[48ch] font-light font-['Inter']">
					Our new collection is everything you need for your next adventure.
					Made to be flexible, breathable and long lasting so you can enjoy more
					of the #OutdoorLiving.
				</p>
			</div>

			<img
				className="absolute inset-0 object-cover w-full h-full"
				src={fullwidthImg}
				alt=""
			/>
		</div>
	);
};

export default FullImagePinndSection;
