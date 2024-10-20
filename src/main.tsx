import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@styles/main.scss";

import App from "./App";
import store, { persistor } from "store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// debugger;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);
