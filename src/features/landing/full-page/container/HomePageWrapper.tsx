import { FC } from "react";

import FullImagePinndSection from "../components/full-image-pinned-section/FullImagePinndSection";
import OverlayTextAnimation from "../components/overlay-text-animation/OverlayTextAnimation";
import HeroPinnedSection from "../components/hero-pinned-section/HeroPinnedSection";
import InfiniteTextSection from "../components/infinite-text/InfiniteTextSection";
import HorizontalScrollingSection from "../components/horizontal-scrolling-section/HorizontalScrollingSection";
import { useHomePageContext } from "@layouts/landing/context/HomeWrapperProvider";
import HeroImage from "../components/Hero-image/HeroImage";

const HomePageWrapper: FC = () => {
	const { isPreloaderEnabled } = useHomePageContext();

	return (
		<div className="relative h-screen w-screen overflow-x-hidden">
			{isPreloaderEnabled ? (
				<section className="absolute inset-0 flex items-center justify-center w-screen h-screen bg-red-300 z-50">
					<h1 className="text-9xl">Pre loader...</h1>
				</section>
			) : null}

			<HeroImage />
			<HeroPinnedSection />
			<InfiniteTextSection />
			<HorizontalScrollingSection />
			<OverlayTextAnimation disableTextMovingAnimation={false} />
			<FullImagePinndSection />
		</div>
	);
};

export default HomePageWrapper;
