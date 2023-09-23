import { ReactNode, forwardRef } from "react";

interface SliderContainerProps {
	children: ReactNode;
}

const SliderContainer = forwardRef<HTMLDivElement, SliderContainerProps>(
	({ children }, ref) => {
		return (
			<div
				ref={ref}
				className="absolute overflow-hidden flex h-full w-fit min-w-full items-start flex-nowrap bg-lime-300"
			>
				{children}
			</div>
		);
	}
);

export default SliderContainer;
