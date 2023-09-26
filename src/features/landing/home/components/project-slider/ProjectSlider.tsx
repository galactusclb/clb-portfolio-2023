import { FC, useState } from "react";

import { HorizontalScroller } from "@components/ui";
import SliderItem from "./SliderItem";

interface ProjectSliderProps {}

const ProjectSlider: FC<ProjectSliderProps> = () => {
	const [items, setItems] = useState<string[]>([
		"bg-red-500",
		"bg-blue-500",
		"bg-pink-500",
		"bg-orange-500",
		"bg-purple-500",
		"bg-teal-500",
	]);

	return (
		<div className="flex flex-col gap-y-5">
			<button
				onClick={() => {
					setItems((prev) => [...prev, "bg-orange-500"]);
				}}
			>
				Click
			</button>
			<HorizontalScroller>
				{items?.map((item, index) => {
					return (
						<SliderItem key={index} title={<span>{item}</span>} bg={item} />
					);
				})}
			</HorizontalScroller>
		</div>
	);
};

export default ProjectSlider;
