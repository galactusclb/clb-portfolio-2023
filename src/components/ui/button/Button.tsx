import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@utils/tailwindMergeHelper";
import { Spinner } from "..";

export const buttonVariants = cva(
    "inline-flex items-center truncate overflow-hidden justify-center gap-x-2 text-sm font-normal transition-colors cursor-pointer  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background select-none duration-300",
    {
        variants: {
            variant: {
                // primary: "bg-primary text-primary-foreground hover:bg-primary/90",
                primary: "bg-lime-500 text-slate-900 hover:text-white hover:bg-lime-500",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline:
                    "border border-input hover:bg-accent hover:text-accent-foreground",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
                highlight_default: "bg-slate-200 text-secondary-foreground",
                highlight_active: "bg-blue-100 text-primary",
            },
            size: {
                default: "h-20 py-4 px-8",
                lg: "h-11 px-8",
                sm: "h-9 px-3",
                icon: "h-10 w-10",
            },
            width: {
                default: "min-w-44",
                full: "w-full",
                fit: "w-fit"
            },
            shape: {
                default: "rounded-3xl",
                rounded: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
            width: "default",
            shape: "rounded",
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, width, shape, className, isLoading, disabled, ...props }, ref) => {
        return (
            <button
                {...props}
                role="button"
                ref={ref}
                className={cn(buttonVariants({ variant, size, width, shape, className }))}
                disabled={disabled}
            >
                {isLoading ? <Spinner /> : null}
                {props.children}
            </button>
        );
    }
);
export default Button;