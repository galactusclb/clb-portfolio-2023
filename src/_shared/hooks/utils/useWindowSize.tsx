import { useEffect, useState } from "react";

const useWindowSize = () => {
	const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

	useEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}

		updateSize();
		window.addEventListener("resize", updateSize);

		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return size;
};

export default useWindowSize;
