import React from 'react'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from '@/components/ui/Tooltip'
import { cn } from '@/common/lib/utils'

interface CardProps {
   title: string,
   id: number,
   label: string,
   icon: JSX.Element,
   level: string,
   onLearn: boolean
}



const ItemCard = ({ title, id, label, icon, level, onLearn }: CardProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <div key={id+level} id={label} className={cn(`flex justify-center items-center flex-col px-4 `, onLearn && 'border-nicheBlue dark:border-green-500 border-b-2 pb-1')}>
                  <span className="text-3xl sm:text-4xl">
                     {icon}
                  </span>
               </div>
            </TooltipTrigger>
            <TooltipContent className='font-outfit'>
               {title}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}

export default ItemCard