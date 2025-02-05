'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'

import * as React from 'react'

import { cn } from '@/common/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
React.ElementRef<typeof TabsPrimitive.List>,
React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
<TabsPrimitive.List
   ref={ref}
   className={cn(
      'inline-flex h-12 items-center justify-center rounded-md border-2 border-black bg-neutral-100 dark:bg-lightGreen p-1 text-center',
      className,
   )}
   {...props}
/>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
React.ElementRef<typeof TabsPrimitive.Trigger>,
React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
<TabsPrimitive.Trigger
   ref={ref}
   className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md  px-3 py-1.5 text-sm font-heading transition-all w-full  focus-visible:ring-black focus-visible:outline-none  data-[state=active]:border-2 data-[state=active]:border-black data-[state=active]:border-b-4 data-[state=active]:border-r-6 data-[state=active]:bg-main dark:data-[state=active]:bg-zinc-800 dark:data-[state=active]:text-neutral-200 dark:text-black',
      className,
   )}
   {...props}
/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
React.ElementRef<typeof TabsPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
<TabsPrimitive.Content
   ref={ref}
   className={cn(
      'mt-2  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
      className,
   )}
   {...props}
/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }