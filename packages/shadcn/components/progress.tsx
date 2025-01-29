"use client";

import {
  Indicator as ProgressIndicator,
  Root as ProgressRoot,
} from "@radix-ui/react-progress";
import React from "react";

import { cn } from "@packages/shadcn/lib/cn";

const Progress = ({
  ref,
  className,
  value,
  ...props
}: React.ComponentPropsWithRef<typeof ProgressRoot>) => (
  <ProgressRoot
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className,
    )}
    ref={ref}
    {...props}
  >
    <ProgressIndicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressRoot>
);
Progress.displayName = ProgressRoot.displayName;

export { Progress };
