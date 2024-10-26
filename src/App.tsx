import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import PageLayout from "@components/shared/page-layout/PageLayout";
import About from "@pages/landing/About";
import Home from "@pages/landing/Home";
import Works from "@pages/landing/Works";
import { currentPageActions } from "store/currentPageSlice";

const queryClient = new QueryClient();

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
						<Route path="/*" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/works" element={<Works />} />
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</AnimatePresence>
			</PageLayout>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
