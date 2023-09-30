import { FC } from "react";

import { cn } from "@utils/tailwindMergeHelper";
import Sentence, { SentenceProps } from "./Sentence";

interface InfiniteTextProps extends SentenceProps {
	className?: string;
}

const InfiniteText: FC<InfiniteTextProps> = ({
	sentence,
	animationDelay = 0,
	animationDuration = 4,
	spaceBetweenSentence = "pl-10",
	className,
}) => {
	return (
		<div
			className={cn(
				"flex items-center h-full uppercase cursor-pointer group whitespace-nowrap",
				className
			)}
		>
			<Sentence
				sentence={sentence}
				animationDelay={animationDelay}
				animationDuration={animationDuration}
				spaceBetweenSentence={spaceBetweenSentence}
			/>
			<Sentence
				sentence={sentence}
				animationDelay={animationDelay}
				animationDuration={animationDuration}
				spaceBetweenSentence={spaceBetweenSentence}
			/>
		</div>
	);
};

export default InfiniteText;
