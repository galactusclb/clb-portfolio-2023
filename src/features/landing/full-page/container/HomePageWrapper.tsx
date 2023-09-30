import { FC } from "react";

import FullImagePinndSection from "../components/full-image-pinned-section/FullImagePinndSection";
import OverlayTextAnimation from "../components/overlay-text-animation/OverlayTextAnimation";
import HeroPinnedSection from "../components/hero-pinned-section/HeroPinnedSection";
import InfiniteTextSection from "../components/infinite-text/InfiniteTextSection";

const HomePageWrapper: FC = () => {
	return (
		<div>
			<HeroPinnedSection />
			<InfiniteTextSection />
			<OverlayTextAnimation disableTextMovingAnimation={false} />
			<FullImagePinndSection />
		</div>
	);
};

export default HomePageWrapper;
