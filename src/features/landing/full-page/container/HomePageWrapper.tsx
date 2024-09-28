import { FC } from "react";

import FullImagePinndSection from "../components/full-image-pinned-section/FullImagePinndSection";
import HeroPinnedSection from "../components/hero-pinned-section/HeroPinnedSection";
import HorizontalScrollingSection from "../components/horizontal-scrolling-section/HorizontalScrollingSection";
import InfiniteTextSection from "../components/infinite-text/InfiniteTextSection";
import OverlayTextAnimation from "../components/overlay-text-animation/OverlayTextAnimation";
import PageLayout from "../components/page-layout/PageLayout";

const HomePageWrapper: FC = () => {
	// const { isPreloaderEnabled } = useHomePageContext();

	return (
		<>
			<PageLayout>
				<HeroPinnedSection key={Date.now()} />
				<InfiniteTextSection />
				<HorizontalScrollingSection />
				<OverlayTextAnimation disableTextMovingAnimation={false} />
				<FullImagePinndSection />
			</PageLayout>
		</>
	);
};

export default HomePageWrapper;