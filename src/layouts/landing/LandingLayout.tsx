import { FC } from "react";

import { HomeContainer } from "features/landing/home";
import Scroller from "features/landing/home/container/Scroller";

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => {
	// return <HomeContainer />;
	return <Scroller />;
};

export default LandingLayout;
