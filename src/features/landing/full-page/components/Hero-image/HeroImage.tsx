import { FC } from "react";

import { useImagePreloader } from "hook";

import { useHomePageContext } from "@layouts/landing/context/HomeWrapperProvider";

const imageList = [
	"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
];

interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = () => {
	const { setPreloaderEnabled } = useHomePageContext();

	// const imageList = useMemo(
	// 	() => [
	// 		"https://plus.unsplash.com/premium_photo-1692642577323-3fa92577e035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
	// 	],
	// 	[]
	// );

	const { loadedImages } = useImagePreloader({
		images: imageList,
		onLoadFinish: () => setPreloaderEnabled(false),
	});

	return (
		<div>
			<img src={loadedImages?.[0]} />
		</div>
	);
};

export default HeroImage;
