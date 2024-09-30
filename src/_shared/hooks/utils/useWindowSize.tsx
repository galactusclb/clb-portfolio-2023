import { useState, useEffect } from "react"
import useDebounce from "./useDebounce"

const useWindowSize = () => {
	function getSize() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		}
	}

	const [windowSize, setWindowSize] = useState(getSize)

	const debouncedValue = useDebounce(windowSize.width)

	useEffect(() => {
		// Debounce to avoid the function fire multiple times
		const handleResizeDebounced = () => setWindowSize(getSize())

		window.addEventListener("resize", handleResizeDebounced)
		return () => window.removeEventListener("resize", handleResizeDebounced)
	}, [])

	return debouncedValue
}

export default useWindowSize;