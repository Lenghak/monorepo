import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";

import { cn } from "@packages/shadcn/lib/cn";

export const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = ({
  ref,
  className,
  variant,
  ...props
}: ComponentPropsWithRef<"div"> & VariantProps<typeof alertVariants>) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    ref={ref}
    role="alert"
    {...props}
  />
);
Alert.displayName = "Alert";

const AlertTitle = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"h5">) => (
  <h5
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    ref={ref}
    {...props}
  />
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    ref={ref}
    {...props}
  />
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
