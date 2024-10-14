import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, forwardRef } from "react";

import { cn } from "@utils/tailwindMergeHelper";

export const linkVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "link",
            size: "default",
        },
    }
);

interface LinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> { }

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ variant, size, className, ...props }, ref) => {
        return (
            <a
                {...props}
                ref={ref}
                className={cn(linkVariants({ variant, size, className }))}
            >
                {props.children}
            </a>
        );
    }
);
export default Link;