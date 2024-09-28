import { FC } from "react";

interface HomeShowcaseProps {
	title: string;
}

const HomeShowcase: FC<HomeShowcaseProps> = ({ title }) => {
	return (
		<section className="flex justify-center items-center bg-yellow-400 h-screen">
			<h1 className="text-9xl font-extralight">{title}</h1>
		</section>
	);
};

export default HomeShowcase;
