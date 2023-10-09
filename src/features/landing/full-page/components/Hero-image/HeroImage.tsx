import { FC, useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { appLoadingConfigActions } from "store/appLoadingConfigSlice";

import { useImagePreloader } from "hook";

import { useHomePageContext } from "@layouts/landing/context/HomeWrapperProvider";

// const imageList = [
// 	"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
// ];

interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = () => {
	// const { setPreloaderEnabled } = useHomePageContext();

	const dispatch = useDispatch();

	const imageList = useMemo(
		() => [
			"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
		],
		[]
	);

	const setProgress = useCallback(
		(progress: number) => {
			dispatch(appLoadingConfigActions.setLoadingProgress(progress));
		},
		[dispatch]
	);

	const setFinishedStatus = useCallback(() => {
		dispatch(appLoadingConfigActions.setPreloadingFinishStatus(true));
	}, [dispatch]);

	// const cb = useCallback(() => {
	// 	console.log("Successfully loaded");
	// }, []);

	const { loadedImages, progress, totalProgress } = useImagePreloader({
		images: imageList,
		// onLoadFinish: () => setPreloaderEnabled(false),
		onLoadFinish: setFinishedStatus,
	});

	useEffect(() => {
		console.log(progress);
	}, [progress]);

	useEffect(() => {
		console.log(totalProgress);
		setProgress(totalProgress);
	}, [setProgress, totalProgress]);

	return (
		<div>
			<img src={loadedImages?.[0]} />
		</div>
	);
};

export default HeroImage;
