import { HomeContainer } from "@features/landing/home";
import LandingLayout from "@layouts/landing/LandingLayout";
import { FC } from "react";

interface HomeProps { }

const Home: FC<HomeProps> = () => {
	return (
		<LandingLayout>
			<HomeContainer />
		</LandingLayout>
	);
};

export default Home;
