import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { appLoadingConfigActions } from "store/appLoadingConfigSlice";
import useImagePreloader from "./useImagePreloader";

const useCachingImages = () => {
	const dispatch = useDispatch();

	const imageList = useMemo(
		() => [
			// "https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
			"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
			// "https://images.unsplash.com/photo-1697122264730-aee187973194?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
			// "https://images.unsplash.com/photo-1684252408280-737200626f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
			// "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
			// "https://images.unsplash.com/photo-1695848548758-3ee40e6cd9ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
			// "https://images.unsplash.com/photo-1682685796852-aa311b46f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
			// "https://plus.unsplash.com/premium_photo-1695680239312-71b1a1670573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
		],
		[]
	);

	const setProgress = useCallback(
		(progress: number | string) => {
			dispatch(appLoadingConfigActions.setLoadingProgress(progress));
		},
		[dispatch]
	);

	const setFinishedStatus = useCallback(() => {
		console.log("setFinishedStatus");

		// setTimeout(() => {
		dispatch(appLoadingConfigActions.setPreloadingFinishStatus(true));
		// }, 3000);
	}, [dispatch]);

	const { loadedImages, progress, totalProgress } = useImagePreloader({
		images: imageList,
		onLoadFinish: setFinishedStatus,
	});

	useEffect(() => {
		console.log(totalProgress);
		setProgress(totalProgress);
	}, [setProgress, totalProgress]);
};

export default useCachingImages;
