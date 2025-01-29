"use client";

import {
  Content as TabsContentPrimitive,
  List as TabsListPrimitive,
  Root as TabsRoot,
  Trigger as TabsTriggerPrimitive,
} from "@radix-ui/react-tabs";
import React from "react";

import { cn } from "@packages/shadcn/lib/cn";

const Tabs = TabsRoot;

const TabsList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TabsListPrimitive>) => (
  <TabsListPrimitive
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
);
TabsList.displayName = TabsListPrimitive.displayName;

const TabsTrigger = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TabsTriggerPrimitive>) => (
  <TabsTriggerPrimitive
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
);
TabsTrigger.displayName = TabsTriggerPrimitive.displayName;

const TabsContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<typeof TabsContentPrimitive>) => (
  <TabsContentPrimitive
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    ref={ref}
    {...props}
  />
);
TabsContent.displayName = TabsContentPrimitive.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
