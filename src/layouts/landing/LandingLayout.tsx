import { FC, ReactNode } from "react";
import SmoothScroller from "@components/shared/SmoothScroller";
import { HomeContainer } from "@features/landing/home";
import { HomePageContextProvider } from "./context/HomeWrapperProvider";
import useGSAPHeightChangeListener from "@hooks/useGSAPHeightChangeListener";
import TransitionSlideinSlideup from "@components/shared/transition-slidein-slideup/TransitionSlideinSlideup";

interface LandingLayoutProps {
	children: ReactNode
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => {

	useGSAPHeightChangeListener()

	return (
		<TransitionSlideinSlideup>
			<HomePageContextProvider>
				<SmoothScroller >
					{/* <HomePageWrapper /> */}
					{/* <PlutoPageWrapper /> */}
					{/* <HomeContainer /> */}
					{children}
				</SmoothScroller>
			</HomePageContextProvider>
		</TransitionSlideinSlideup>
	);
};

export default LandingLayout;
