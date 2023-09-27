import { FC } from "react";

import FullImagePinndSection from "../components/full-image-pinned-section/FullImagePinndSection";
import OverlayTextAnimation from "../components/overlay-text-animation/OverlayTextAnimation";

const HomePageWrapper: FC = () => {
	return (
		<div>
			<div className="h-screen bg-teal-200"></div>
			<OverlayTextAnimation />
			<FullImagePinndSection />
		</div>
	);
};

export default HomePageWrapper;
