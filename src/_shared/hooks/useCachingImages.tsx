import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { appLoadingConfigActions } from "store/appLoadingConfigSlice";
import useImagePreloader from "./useImagePreloader";

interface CashingImagesProps {
	urlList: string[];
	delay?: number
}

const useCachingImages = ({
	urlList,
	delay
}: CashingImagesProps) => {
	const dispatch = useDispatch();

	const imageList = useMemo(() => urlList, [urlList]);

	const timeoutRef = useRef<number | null>(null)

	const setProgress = useCallback(
		(progress: number | string) => {
			dispatch(appLoadingConfigActions.setLoadingProgress(progress));
		},
		[dispatch]
	);

	const setFinishedStatus = useCallback(() => {

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}

		if (!delay) return setPreloaderFinish();

		timeoutRef.current = setTimeout(() => {
			setPreloaderFinish();

			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = null;
		}, delay);
	}, [delay, dispatch]);

	function setPreloaderFinish() {
		dispatch(appLoadingConfigActions.setPreloadingFinishStatus(true));
	}

	const { loadedImages, progress, totalProgress } = useImagePreloader({
		images: imageList,
		onLoadFinish: setFinishedStatus,
	});

	useEffect(() => {
		setProgress(totalProgress);
	}, [setProgress, totalProgress]);
};

export default useCachingImages;
