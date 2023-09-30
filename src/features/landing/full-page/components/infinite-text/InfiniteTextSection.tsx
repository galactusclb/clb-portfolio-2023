import { FC } from "react";

import { InfiniteText } from "@components/ui";

const InfiniteTextSection: FC = () => {
	return (
		<div className="mx-24 overflow-hidden bg-orange-200 rounded-full py-28">
			{/* <div className="w-2/3 overflow-hidden border border-black rounded-full h-14"> */}
			<InfiniteText
				sentence={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
				animationDuration={10}
				className="text-8xl"
				spaceBetweenSentence="pl-[56px]"
			/>
			{/* </div> */}
		</div>
	);
};

export default InfiniteTextSection;
