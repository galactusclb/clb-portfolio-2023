import { FC } from "react";
import SmoothScroller from "@components/shared/SmoothScroller";
import { HomeContainer } from "@features/landing/home";
import { HomePageContextProvider } from "./context/HomeWrapperProvider";

const LandingLayout: FC = () => {

	return (
		<HomePageContextProvider>
			<SmoothScroller >
				{/* <HomePageWrapper /> */}
				{/* <PlutoPageWrapper /> */}
				<HomeContainer />
			</SmoothScroller>
		</HomePageContextProvider>
	);
};

export default LandingLayout;
