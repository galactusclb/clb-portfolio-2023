import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AdminLayout from "./layouts/admin-layout/AdminLayout";
import LandingLayout from "@layouts/landing/LandingLayout";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{/* <div className="container-fuild"> */}
			<BrowserRouter>
				<Routes>
					<Route path="/admin/*" element={<AdminLayout />} />
					<Route path="/*" element={<LandingLayout />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>

			{/* <ToastContainer /> */}
			{/* </div> */}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
