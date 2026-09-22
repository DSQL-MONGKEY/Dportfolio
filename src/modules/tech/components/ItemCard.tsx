import React from 'react'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from '@/components/ui/Tooltip'
import { cn } from '@/common/lib/utils'

interface CardProps {
   title: string
   icon: JSX.Element
   level: string
   onLearn: boolean
}

const levelStyles: Record<string, string> = {
   advanced: 'bg-[#8ad451]',
   intermediate: 'bg-[#F4CE14]',
   basic: 'bg-[#25F4EE]',
}

const normalizeLevel = (level: string) => {
   const key = level.toLowerCase()
   if (key.startsWith('inter')) return 'intermediate'
   if (key.startsWith('adv')) return 'advanced'
   return 'basic'
}

const ItemCard = ({ title, icon, level, onLearn }: CardProps) => {
   return (
      <TooltipProvider delayDuration={100}>
         <Tooltip>
            <TooltipTrigger asChild>
               <div className="group relative flex aspect-square cursor-help items-center justify-center border-2 border-mainDark bg-main shadow-[3px_3px_0px_0px_#000] transition-transform duration-200 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack">
                  <span className="text-2xl transition-transform duration-200 group-hover:scale-110 sm:text-3xl">
                     {icon}
                  </span>

                  {onLearn && (
                     <>
                        <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 animate-ping rounded-full bg-[#F55353]" />
                        <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#F55353]" />
                     </>
                  )}
               </div>
            </TooltipTrigger>

            <TooltipContent className="border-2 border-mainDark bg-main text-text shadow-[3px_3px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText">
               <span className="block font-lexend text-xs font-bold">{title}</span>
               <span className="mt-1 flex items-center gap-1.5 font-outfit text-[11px] font-bold uppercase tracking-[0.1em] opacity-70">
                  <span
                     className={cn(
                        'h-2 w-2 rounded-full border border-mainDark dark:border-darkBorder',
                        levelStyles[normalizeLevel(level)]
                     )}
                  />
                  {level}
               </span>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}

export default ItemCard
