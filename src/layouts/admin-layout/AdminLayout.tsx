import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header"; 
import useAuth from "@features/authentication/hooks/useAuth";
import AdminRoutes from "@routes/admin.routes";
import useRouteGenerator from "@hooks/useRouteGenerator";


const AdminLayout = () => {
	const { isLoggedIn } = useAuth();

	const location = useLocation();

	const { getRoutes } = useRouteGenerator();

	return !isLoggedIn ? (
		<Navigate to="/login" state={{ from: location }} replace />
	) : (
		<div className="container-fluid">
			<Header />
			<div className="mt-5">
				<Routes>
					{getRoutes(AdminRoutes, location?.pathname)}
					{/* <Route path="*" element={<Navigate to="/feedbacks" replace />} /> */}
				</Routes>
			</div>
		</div>
	);
};

export default AdminLayout;
