import { FC } from "react";
import HomeShowcase from "../components/HomeShowcase";
import HorizontalScrollingSlider from "../components/horizontal-scrolling-slider/HorizontalScrollingSlider";

const HomeContainer: FC = () => {
	return (
		<div className="flex flex-col min-h-screen w-full max-w-full overflow-hidden bg-yellow-200">
			<HomeShowcase title="Header" />
			<HorizontalScrollingSlider />
			<HomeShowcase title="Footer" />
			<HomeShowcase title="Footer" />
			<HomeShowcase title="Footer" />
			<HomeShowcase title="Footer" />
			<HomeShowcase title="Footer" />
		</div>
	);
};

export default HomeContainer;
