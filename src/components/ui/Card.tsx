
import * as React from 'react'

import { cn } from '@/common/lib/utils'

const Card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn(
         'rounded-md shadow-light dark:shadow-dark border-2 border-slate-500 dark:border-darkBorder bg-slate-300 dark:bg-[#6499E9] text-black hover:shadow-neutral-800 hover:dark:shadow-slate-300 duration-300',
         className,
      )}
      {...props}
   />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
   />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
   <h3
      ref={ref}
      className={cn(
         'text-xl leading-none font-heading tracking-tight',
         className,
      )}
      {...props}
   />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>
   >(({ className, ...props }, ref) => (
   <p
      ref={ref}
      className={cn('text-sm text-black font-base !mt-3', className)}
      {...props}
   />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
   />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }