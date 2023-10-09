import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface SectionPreloaderProps {}

const SectionPreloader: FC<SectionPreloaderProps> = () => {
	const appLoadingConfig = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	const { preloadImageProgress } = appLoadingConfig;

	return (
		<section className="absolute inset-0 z-50 flex items-center justify-center w-screen h-screen bg-red-300">
			<h1 className="text-9xl">Pre loader {preloadImageProgress}%</h1>
		</section>
	);
};

export default SectionPreloader;
