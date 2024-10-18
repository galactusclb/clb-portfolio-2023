import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store";
import { opacity, slideUp } from "./anim";

interface SectionPreloaderProps { }

const SectionPreloader: FC<SectionPreloaderProps> = () => {

	const CURVE_HEIGHT = 300;

	const appLoadingConfig = useSelector(
		(state: RootState) => state.appLoadingConfig
	);

	const { preloadImageProgress } = appLoadingConfig;

	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
		} Q${dimension.width / 2} ${dimension.height + CURVE_HEIGHT} 0 ${dimension.height
		}  L0 0`;

	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
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
		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	const animate = (variants: any) => ({
		initial: "initial",
		animate: "enter",
		exit: 'exit',
		variants
	})

	return (
		<motion.section
			{...animate(slideUp)}
			className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-slate-900"
		>
			<motion.h4
				// variants={opacity}
				// initial="initial"
				// animate="enter"
				{...animate(opacity)}
				className="absolute top-[40%] left-1/2 w-full -translate-x-1/2 text-8xl text-center text-white z-[1]"
			>
				Pre loader {preloadImageProgress}%
			</motion.h4>
			{dimension.width > 0 && (
				<>
					<svg
						className="absolute top-0 w-full"
						style={{ height: `calc(100% + ${CURVE_HEIGHT}px)` }}
					>
						<motion.path
							{...animate(curve)}
						></motion.path>
					</svg>
				</>
			)}
		</motion.section>
	);
};

export default SectionPreloader;
