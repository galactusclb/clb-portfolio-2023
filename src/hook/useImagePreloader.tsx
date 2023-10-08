import { useEffect, useState } from "react";

type TImagePreloader = {
	images: string[];
	onLoadFinish: () => void;
};

const useImagePreloader = ({ images, onLoadFinish }: TImagePreloader) => {
	// const [isLoading, setIsLoading] = useState(true);
	// const [imagesState, setImagesState] = useState([
	// 	"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
	// ]);

	const [loadedImages, setLoadedImages] = useState<string[]>([]);

	useEffect(() => {
		console.log(images);
	}, [images]);

	useEffect(() => {
		images.forEach((image) => {
			const img = new Image();
			img.src = image;
			console.log(img);

			img.onload = () => {
				setLoadedImages((prev) => [...prev, image]);
			};
		});
	}, [images]);

	useEffect(() => {
		console.log(loadedImages.length, images.length);

		if (loadedImages.length >= images.length) {
			// setIsLoading(false);
			// setPreloaderEnabled(false);
			onLoadFinish();
		}
	}, [loadedImages, images, onLoadFinish]);

	return { loadedImages };
};

export default useImagePreloader;
