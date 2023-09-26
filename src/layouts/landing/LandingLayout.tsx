import { FC } from "react";

import { HomeContainer } from "features/landing/home";
import { HomePageWrapper } from "features/landing/full-page";

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => {
	// return <HomeContainer />;
	return <HomePageWrapper />;
};

export default LandingLayout;
