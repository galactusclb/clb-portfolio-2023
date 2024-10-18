import { AnimatePresence } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import SectionPreloader from "./section-preloader/SectionPreloader";
import useCachingImages from "@hooks/useCachingImages";

interface PageLayoutProps {
	children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	const { isPreloadingFinished } = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	useCachingImages({
		urlList: [
			"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
			"https://images.unsplash.com/photo-1697122264730-aee187973194?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
			"https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
			"https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
		],
		// delay: 5000
	});
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setIsLoading(false);
	// 		document.body.style.cursor = "progress";
	// 		// window.scrollTo(0, 0);
	// 	}, 3500);

	// 	return () => {
	// 		clearTimeout(timeout);
	// 	};
	// 	// }, [isPreloadingFinished]);
	// }, []);

	return (
		// <div className="
		<>
			<AnimatePresence mode="wait">
				{
					!isPreloadingFinished ? (
						<SectionPreloader />
					) : null
				}
			</AnimatePresence>
			{isPreloadingFinished ? children : null}
		</>
	);
};

export default PageLayout;
