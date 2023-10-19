import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { RootState } from "store";
import { opacity, slideUp } from "./anim";
import useCachingImages from "hook/useCachingImages";

interface SectionPreloaderProps {}

const SectionPreloader: FC<SectionPreloaderProps> = () => {
	useCachingImages();

	const CURVE_HEIGHT = 300;

	const appLoadingConfig = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	const { preloadImageProgress } = appLoadingConfig;

	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + CURVE_HEIGHT} 0 ${
		dimension.height
	}  L0 0`;

	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,

			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,

			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	useEffect(() => {
		console.log(window.innerWidth, window.innerHeight);

		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	return (
		<motion.section
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-slate-900"
		>
			{dimension.width > 0 && (
				<>
					<motion.h1
						variants={opacity}
						initial="initial"
						animate="enter"
						className="text-9xl text-white z-[1]"
					>
						Pre loader {preloadImageProgress}%
					</motion.h1>
					<svg
						className="absolute top-0 w-full"
						style={{ height: `calc(100% + ${CURVE_HEIGHT}px)` }}
					>
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
						></motion.path>
					</svg>
				</>
			)}
		</motion.section>
	);
};

export default SectionPreloader;
