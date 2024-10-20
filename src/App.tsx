import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes, useLocation } from "react-router-dom";

import PageLayout from "@components/shared/page-layout/PageLayout";
import TransitionSlideinSlideup from "@components/shared/transition-slidein-slideup/TransitionSlideinSlideup";
import Header from "@features/landing/home/components/header/Header";
import LandingLayout from "@layouts/landing/LandingLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentPageActions } from "store/currentPageSlice";

const queryClient = new QueryClient();

const zoom = {
	initial: {
		opacity: 0.9,
		scale: 0.85,
		borderRadius: '1.6rem',
	},
	enter: {
		opacity: 1,
		scale: 1,
		borderRadius: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: [0.64, 0, 0.78, 0]
		},
		// transitionEnd: {
		// 	top: '47.5%',
		// }
	},
	exit: {
		opacity: .9,
		scale: 0.85,
		borderRadius: '1.6rem',
		transition: {
			duration: 0.5,
			// delay: 0.4,
			ease: [0.33, 1, .68, 1]
		},
	}
}

const AboutComponent = () => {

	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={zoom}
			className='relative w-full min-h-screen bg-[#e4e41f] text-[#3D4343] overflow-y-auto overflow-x-hidden origin-center rounded-3xl'>
			<Header />
			About Page
		</motion.div>
	)
}

const WorksComponent = () => {

	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={zoom}
			className='relative w-full min-h-screen bg-[#e4e41f] text-[#3D4343] overflow-y-auto overflow-x-hidden origin-center rounded-3xl'>
			<Header />
			Works Page
		</motion.div>
	)
}

function App() {

	const location = useLocation()
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentPageActions.setCurrentPage(location.pathname));
	}, [location.pathname])


	return (
		<QueryClientProvider client={queryClient}>
			<PageLayout>
				<AnimatePresence mode="wait">
					<Routes key={location.pathname} location={location}>
						<Route path="/*" element={<TransitionSlideinSlideup><LandingLayout /></TransitionSlideinSlideup>} />
						<Route path="/about" element={<TransitionSlideinSlideup><AboutComponent /></TransitionSlideinSlideup>} />
						<Route path="/works" element={<TransitionSlideinSlideup><WorksComponent /></TransitionSlideinSlideup>} />
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</AnimatePresence>
			</PageLayout>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
