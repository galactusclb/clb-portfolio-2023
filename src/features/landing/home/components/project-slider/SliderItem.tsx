import { FC, ReactNode } from "react";

interface SliderItemProps {
	title: ReactNode;
	bg: string;
}

const SliderItem: FC<SliderItemProps> = ({ title, bg }) => {
	return (
		<div
			className={`relative flex items-center justify-center h-full w-screen border-s border-red-400 ${bg}`}
		>
			<h1 className="font-semibold text-7xl">{title}</h1>
		</div>
	);
};

export default SliderItem;
