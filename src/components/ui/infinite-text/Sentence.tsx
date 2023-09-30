import { FC, ReactNode } from "react";

import { cn } from "@utils/tailwindMergeHelper";

export interface SentenceProps {
	sentence: ReactNode;
	animationDuration?: number;
	animationDelay?: number;
	spaceBetweenSentence?: string;
}

const Sentence: FC<SentenceProps> = ({
	sentence,
	spaceBetweenSentence,
	animationDelay,
	animationDuration,
}) => {
	return (
		<span
			className={cn(` group-hover:pause animate-loopL`, spaceBetweenSentence)}
			style={{
				animationDuration: `${animationDuration}s`,
				animationDelay: `${animationDelay}s`,
			}}
		>
			{sentence}
		</span>
	);
};

export default Sentence;
