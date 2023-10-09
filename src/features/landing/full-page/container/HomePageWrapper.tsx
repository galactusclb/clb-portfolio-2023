import { FC } from "react";

import FullImagePinndSection from "../components/full-image-pinned-section/FullImagePinndSection";
import OverlayTextAnimation from "../components/overlay-text-animation/OverlayTextAnimation";
import HeroPinnedSection from "../components/hero-pinned-section/HeroPinnedSection";
import InfiniteTextSection from "../components/infinite-text/InfiniteTextSection";
import HorizontalScrollingSection from "../components/horizontal-scrolling-section/HorizontalScrollingSection";
import { useHomePageContext } from "@layouts/landing/context/HomeWrapperProvider";
import HeroImage from "../components/Hero-image/HeroImage";
import SectionPreloader from "../components/section-preloader/SectionPreloader";
import { useSelector } from "react-redux";
import { RootState } from "store";

const HomePageWrapper: FC = () => {
	// const { isPreloaderEnabled } = useHomePageContext();
	const { isProloadingFinished } = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	return (
		<div className="relative w-screen h-screen overflow-x-hidden">
			{!isProloadingFinished ? <SectionPreloader /> : null}

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
