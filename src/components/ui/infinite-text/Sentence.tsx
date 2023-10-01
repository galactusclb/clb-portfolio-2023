import { FC, ReactNode } from "react";

import { cn } from "@utils/tailwindMergeHelper";

export interface SentenceProps {
	sentence: ReactNode;
	animationDuration?: number;
	animationDelay?: number;
	spaceBetweenSentence?: string;
	disablePauseOnHover?: boolean;
}

const Sentence: FC<SentenceProps> = ({
	sentence,
	spaceBetweenSentence,
	animationDelay,
	animationDuration,
	disablePauseOnHover,
}) => {
	return (
		<span
			className={cn(
				`animate-loopL`,
				spaceBetweenSentence,
				!disablePauseOnHover && "group-hover:pause"
			)}
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
