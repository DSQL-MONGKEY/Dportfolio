import React from 'react'
import { cn } from '@/common/lib/utils'

interface NeoSectionHeadingProps {
   title: string
   description?: string
   badge?: string
   badgeClassName?: string
}

const NeoSectionHeading = ({ title, description, badge, badgeClassName }: NeoSectionHeadingProps) => {
   return (
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
         <div>
            <h2 className="font-lexend text-xl font-black uppercase tracking-[0.2em]">{title}</h2>
            {description && <p className="mt-1 font-outfit text-sm opacity-70">{description}</p>}
         </div>

         {badge && (
            <span
               className={cn(
                  'border-2 border-mainDark px-2.5 py-1 text-xs font-bold text-mainDark dark:border-darkBorder',
                  badgeClassName
               )}
            >
               {badge}
            </span>
         )}
      </div>
   )
}

export default NeoSectionHeading
