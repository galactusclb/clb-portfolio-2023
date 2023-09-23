import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HorizontalScrollerProps {}

const HorizontalScroller: FC<HorizontalScrollerProps> = () => {
	const triggerRef = useRef<HTMLDivElement | null>(null);
	const sectionRef = useRef<HTMLDivElement | null>(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const windowWidth = window.innerWidth;

		let pin: any = null;

		if (sectionRef.current && sectionRef.current) {
			console.log(sectionRef.current?.offsetWidth);

			console.log(
				sectionRef.current.children?.length *
					(sectionRef.current.children?.[0] as HTMLElement).offsetWidth
			);

			console.log(sectionRef.current.children?.length);

			console.log(windowWidth);
			console.log(
				(sectionRef.current.children?.[0] as HTMLElement).offsetWidth
			);

			const calculateSliderX =
				sectionRef.current.children?.length *
					(sectionRef.current.children?.[0] as HTMLElement).offsetWidth -
				windowWidth;

			console.log(calculateSliderX);

			pin = gsap.fromTo(
				sectionRef.current,
				{
					translateX: 0,
				},
				{
					// translateX: "-300vw",
					translateX: -calculateSliderX,
					ease: "none",
					duration: 1,
					scrollTrigger: {
						trigger: triggerRef.current,
						start: "top 10%",
						// end: "2000 top",
						end: `${calculateSliderX} bottom`,
						scrub: 1,
						pin: true,
						markers: true,
						invalidateOnRefresh: true,
					},
				}
			);
		}

		return () => {
			pin?.kill();
		};
	}, []);

	return (
		<>
			{/* <section className="flex w-full overflow-hidden h-screen relative bg-red-400">
				<h1 className="font-extrabold text-8xl">HeaDer</h1>
			</section> */}
			<section className="overflow-hidden">
				<div ref={triggerRef}>
					<div
						ref={sectionRef}
						className="flex overflow-hidden h-screen w-fit flex-row relative"
					>
						<div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-green-400">
							<h1 className="font-extrabold text-9xl">old money</h1>
						</div>
						<div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-cyan-400">
							<h1 className="font-extrabold text-9xl">viNtage porschE</h1>
						</div>
						<div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-indigo-400">
							<h1 className="font-extrabold text-9xl">cAssette PlayEr</h1>
						</div>
						<div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-pink-400">
							<h1 className="font-extrabold text-9xl">vespA</h1>
						</div>
						<div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-amber-400">
							<h1 className="font-extrabold text-9xl">Lorem</h1>
						</div>
						<div className="w-screen min-w-[100vw] h-screen flex items-center justify-center bottom-1 border-red-600 bg-red-400">
							<h1 className="font-extrabold text-9xl">Lorem</h1>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="flex w-full overflow-hidden h-screen relative bg-orange-400">
				<h1 className="font-extrabold text-8xl">FooTer</h1>
			</section> */}
		</>
	);
};

export default HorizontalScroller;
