import { FC } from "react";
import SmoothScroller from "@components/shared/SmoothScroller";
import { HomeContainer } from "@features/landing/home";
import { HomePageContextProvider } from "./context/HomeWrapperProvider";
import useGSAPHeightChangeListener from "@hooks/useGSAPHeightChangeListener";

const LandingLayout: FC = () => {

	useGSAPHeightChangeListener()

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
