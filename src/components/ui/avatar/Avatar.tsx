import { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@utils/tailwindMergeHelper";

export const avatarVariants = cva(
    "flex items-center justify-center aspect-square cursor-pointer",
    {
        variants: {
            shape: {
                round: "rounded-full",
                square: "rounded-xl",
            },
            variant: {
                default: "",
            },
            size: {
                default: "w-12 h-12 max-w-12 min-w-12 max-h-12 min-h-12",
                small: "w-8 h-8 max-w-8 min-w-8 max-h-8 min-h-8",
            },
            notificationStatus: {
                disable: "",
                enable: "outline outline-offset-2 outline-3 outline-green-500",
            },
        },
        defaultVariants: {
            shape: "round",
            variant: "default",
            size: "default",
            notificationStatus: "disable",
        },
    }
);

interface AvatarProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    Omit<VariantProps<typeof avatarVariants>, "innerChildType"> {
    image?: string;
    fallbackLabel?: string;
}

const Avatar: FC<AvatarProps> = ({
    image,
    shape,
    size,
    variant,
    notificationStatus,
    fallbackLabel,
    className,
    onClick,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                avatarVariants({ variant, size, shape, notificationStatus, className })
            )}
            onClick={onClick}
            data-testid="avatar"
        >
            <div
                className={cn(
                    avatarVariants({
                        shape,
                        size
                    }),
                    "flex h-full w-full items-center justify-center bg-red-500 aspect-square overflow-hidden hover:scale-105 duration-200"
                )}
            >
                {image ? (
                    <img src={image} alt="" className="w-full h-full"/>
                ) : (
                    <span data-testid="avatar-fallaback">{fallbackLabel?.[0]}</span>
                )}
            </div>
        </div>
    );
};

export default Avatar;