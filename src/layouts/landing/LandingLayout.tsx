import { FC } from "react";

import { HomeContainer } from "features/landing/home";
import { HeroSection } from "features/landing/full-page";

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => {
	// return <HomeContainer />;
	return <HeroSection />;
};

export default LandingLayout;
