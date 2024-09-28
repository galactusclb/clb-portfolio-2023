import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useState,
} from "react";

interface ContextType {
	// Define the shape of your context here
	isPreloaderEnabled: boolean;
	// setPreloaderEnabled: React.Dispatch<React.SetStateAction<boolean>>;
	setPreloaderEnabled: (state: boolean) => void;
}

interface HomePageContextProviderProps {
	children: ReactNode;
}

const HomePageContext = createContext<ContextType | null>(null);

export const useHomePageContext = () => {
	const context = useContext(HomePageContext);
	if (!context) {
		throw new Error(
			"useHomePageContext must be used within a HomePageContextProvider"
		);
	}
	return context;
};

export const HomePageContextProvider = ({
	children,
}: HomePageContextProviderProps) => {
	const [isPreloaderEnabled, setIsPreloaderEnabled] = useState<boolean>(true);

	const setPreloaderEnabled = useCallback((value: boolean) => {
		setIsPreloaderEnabled(value);
	}, []);

	const data: ContextType = {
		isPreloaderEnabled,
		setPreloaderEnabled,
	};

	return (
		<HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
	);
};
