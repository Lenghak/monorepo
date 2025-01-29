import React from "react";

import { cn } from "@packages/shadcn/lib/cn";

const Card = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    ref={ref}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "font-semibold text-2xl leading-none tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
);
CardContent.displayName = "CardContent";

const CardFooter = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
