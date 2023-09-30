import { FC } from "react";

import FullImagePinndSection from "../components/full-image-pinned-section/FullImagePinndSection";
import OverlayTextAnimation from "../components/overlay-text-animation/OverlayTextAnimation";
import HeroPinnedSection from "../components/hero-pinned-section/HeroPinnedSection";

const HomePageWrapper: FC = () => {
	return (
		<div>
			<HeroPinnedSection />
			<OverlayTextAnimation disableTextMovingAnimation={false} />
			<FullImagePinndSection />
		</div>
	);
};

export default HomePageWrapper;
