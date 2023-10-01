import { forwardRef } from "react";

interface ScrollingItemProps {
	title: string;
}

const ScrollingItem = forwardRef<HTMLDivElement, ScrollingItemProps>(
	({ title }, ref) => {
		return (
			<div
				ref={ref}
				className="w-screen min-w-[100vw] h-full relative flex items-center justify-center text-yellow-400 text-9xl border border-slate-200"
			>
				{title}
			</div>
		);
	}
);

export default ScrollingItem;
