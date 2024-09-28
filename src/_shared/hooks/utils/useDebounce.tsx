import { useEffect, useState } from "react";

const useDebounce = (value: string | number, delay = 500) => {

    const [debouncedValue, setDebouncedValue] = useState<string | number>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
export default useDebounce;