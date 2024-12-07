"use client"

import React, { forwardRef, useRef } from 'react'
import ItemContainer from './ItemContainer'
import AnimatedPath from '@/components/ui/AnimatedPath';
import { cn } from '@/common/lib/utils';

const Circle = forwardRef<
   HTMLDivElement,
   { className?: string, children?: React.ReactNode }
>(({ className, children }, ref) => {
   return (
      <div
         ref={ref}
         className={cn(
            'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
            className,
         )}
      >
         {children}
      </div>
   )
})
Circle.displayName = "Circle"



const Timeline = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const journey1Ref = useRef<HTMLDivElement>(null);
   const journey2Ref = useRef<HTMLDivElement>(null);
   
   return (
      <section  className='h-full'>
         <AnimatedPath
            containerRef={containerRef}
            fromRef={journey1Ref}
            toRef={journey2Ref}
            startYOffset={10}
            endYOffset={10}
            curvature={-20}
         />
         <div ref={containerRef} className='flex flex-col gap-96'>
            <div className='w-full flex justify-center'>
            <Circle ref={journey1Ref}>
               <p>lorem</p>
            </Circle>
            </div>
               <div className='w-full flex justify-center'>
                  <Circle ref={journey2Ref}>
                  <p>loremm</p>
                  </Circle>
               </div>
         </div>
         
      </section>
   )
}

export default Timeline