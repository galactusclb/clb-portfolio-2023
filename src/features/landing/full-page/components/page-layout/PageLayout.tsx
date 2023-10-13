import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store";

import SectionPreloader from "../section-preloader/SectionPreloader";
import HeroImage from "../Hero-image/HeroImage";

interface PageLayoutProps {
	children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	const { isProloadingFinished } = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	return (
		<div className="relative w-screen h-screen max-w-[100vw]">
			{!isProloadingFinished ? (
				<>
					<SectionPreloader />
					<HeroImage />
				</>
			) : (
				children
			)}
		</div>
	);
};

export default PageLayout;
