import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// type TImagePreloader = {
// 	images: string[];
// 	onLoadFinish?: () => void;
// };

// const useImagePreloader = ({ images, onLoadFinish }: TImagePreloader) => {
// 	// const [isLoading, setIsLoading] = useState(true);
// 	// const [imagesState, setImagesState] = useState([
// 	// 	"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
// 	// ]);

// 	const [loadedImages, setLoadedImages] = useState<string[]>([]);
// 	const [progress, setProgress] = useState<number[]>(
// 		new Array(images.length).fill(0)
// 	);
// 	const [totalProgress, setTotalProgress] = useState(0);

// 	// useEffect(() => {
// 	// 	images.forEach((image) => {
// 	// 		const img = new Image();
// 	// 		img.src = image;
// 	// 		console.log(img);

// 	// 		img.onload = () => {
// 	// 			setLoadedImages((prev) => [...prev, image]);
// 	// 		};
// 	// 	});
// 	// }, [images]);

// 	// useEffect(() => {
// 	// 	console.log(loadedImages.length, images.length);

// 	// 	if (loadedImages.length >= images.length) {
// 	// 		// setIsLoading(false);
// 	// 		// setPreloaderEnabled(false);
// 	// 		onLoadFinish();
// 	// 	}
// 	// }, [loadedImages, images, onLoadFinish]);

// 	useEffect(() => {
// 		const loadImages = images.map((image, index) =>
// 			axios.get(image, {
// 				responseType: "blob",
// 				onDownloadProgress: (progressEvent) => {
// 					if (progressEvent.total) {
// 						const percentCompleted = Math.round(
// 							(progressEvent.loaded * 100) / progressEvent.total
// 						);
// 						setProgress((oldProgress) => {
// 							const newProgress = [...oldProgress];
// 							newProgress[index] = percentCompleted;
// 							return newProgress;
// 						});
// 					}
// 				},
// 			})
// 		);

// 		Promise.all(loadImages).then((responses) => {
// 			const loaded = responses.map((response) => {
// 				const blob = new Blob([response.data], { type: response.data.type });
// 				return URL.createObjectURL(blob);
// 			});
// 			setLoadedImages(loaded);
// 			onLoadFinish?.();
// 		});
// 	}, [images, onLoadFinish]);

// 	useEffect(() => {
// 		console.log(images);
// 	}, [images]);

// 	useEffect(() => {
// 		console.log(onLoadFinish);
// 	}, [onLoadFinish]);

// 	useEffect(() => {
// 		const total = progress.reduce((a, b) => a + b, 0);
// 		setTotalProgress(total / images.length);
// 		console.log(total);
// 	}, [progress, images.length]);

// 	return { loadedImages, progress, totalProgress };
// };

// export default useImagePreloader;

type TImagePreloader = {
	images: string[];
	onLoadFinish?: () => void;
};

const useImagePreloader = ({ images, onLoadFinish }: TImagePreloader) => {
	const [progress, setProgress] = useState<number[]>(
		new Array(images.length).fill(0)
	);
	const [totalProgress, setTotalProgress] = useState<number | string>(0);

	const { data: loadedImages, isFetching } = useQuery({
		queryKey: ["images"],
		queryFn: async () => {
			const loadImages = images.map((image, index) =>
				axios.get(image, {
					responseType: "blob",
					onDownloadProgress: (progressEvent) => {
						if (progressEvent.total) {
							const percentCompleted = Math.round(
								(progressEvent.loaded * 100) / progressEvent.total
							);
							setProgress((oldProgress) => {
								const newProgress = [...oldProgress];
								newProgress[index] = percentCompleted;
								return newProgress;
							});
						}
					},
				})
			);

			const responses = await Promise.all(loadImages);
			return responses.map((response) => {
				const blob = new Blob([response.data], { type: response.data.type });
				return URL.createObjectURL(blob);
			});
		},
		refetchOnMount: false,
		staleTime: Infinity,
	});

	useEffect(() => {
		if (!isFetching && onLoadFinish) {
			onLoadFinish();
		}
	}, [isFetching, onLoadFinish]);

	useEffect(() => {
		const total = progress.reduce((a, b) => a + b, 0);
		const currentProgress: string = (total / images.length).toFixed();
		setTotalProgress(currentProgress);
	}, [progress, images.length]);

	return { loadedImages, progress, totalProgress };
};

export default useImagePreloader;
