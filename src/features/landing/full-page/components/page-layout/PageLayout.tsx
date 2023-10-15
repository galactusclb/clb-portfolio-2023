import { FC, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { RootState } from "store";

import SectionPreloader from "../section-preloader/SectionPreloader";
import HeroImage from "../Hero-image/HeroImage";
import HeroPinnedSection from "../hero-pinned-section/HeroPinnedSection";

interface PageLayoutProps {
	children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	const { isProloadingFinished } = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setIsLoading(false);
	// 		document.body.style.cursor = "default";
	// 		// window.dispatchEvent(new Event("resize"));
	// 		// window.scrollTo(0, 0);
	// 	}, 3000);

	// 	return () => {
	// 		clearTimeout(timeout);
	// 	};
	// }, []);

	return (
		<div className="relative w-screen h-screen max-w-[100vw]">
			<AnimatePresence mode="wait">
				{!isProloadingFinished ? (
					// <>
					<SectionPreloader />
				) : // 	<HeroImage />
				null}
			</AnimatePresence>
			{isProloadingFinished ? children : null}
			{/* {children} */}
		</div>
	);
};

export default PageLayout;
