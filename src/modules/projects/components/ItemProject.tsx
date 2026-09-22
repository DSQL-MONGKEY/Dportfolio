import Link from 'next/link'
import React from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { ProjectTech } from '@/common/types/project'

const shadows = [
   'shadow-[4px_4px_0px_0px_#F4CE14]',
   'shadow-[4px_4px_0px_0px_#25F4EE]',
   'shadow-[4px_4px_0px_0px_#E1306C]',
   'shadow-[4px_4px_0px_0px_#8ad451]',
]

const accents = ['bg-[#F4CE14]', 'bg-[#25F4EE]', 'bg-[#E1306C]', 'bg-[#8ad451]']

const MAX_TAGS = 4

interface ItemProjectProps {
   index: number
   title: string
   techStack: ProjectTech[]
   desc: string
   link: string
   isFeatured: boolean
}

const ItemProject = ({ index, title, techStack, desc, link, isFeatured }: ItemProjectProps) => {
   const extraTags = techStack.length - MAX_TAGS

   return (
      <article
         className={cn(
            'group flex h-full flex-col border-2 border-mainDark bg-main p-3 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack sm:p-4 md:p-5',
            shadows[index % shadows.length]
         )}
      >
         <div className="flex items-center justify-between gap-3">
            <span
               className={cn(
                  'border-2 border-mainDark px-1.5 py-0.5 font-lexend text-[10px] font-black text-mainDark dark:border-darkBorder sm:px-2 sm:text-[11px]',
                  accents[index % accents.length]
               )}
            >
               {String(index + 1).padStart(2, '0')}
            </span>

            {isFeatured && (
               <span className="border-2 border-mainDark bg-mainDark px-1.5 py-0.5 font-outfit text-[9px] font-black uppercase tracking-[0.1em] text-main dark:border-darkBorder dark:bg-darkText dark:text-mainDark sm:px-2 sm:text-[10px] sm:tracking-[0.15em]">
                  Featured
               </span>
            )}
         </div>

         <h3 className="mt-3 font-lexend text-sm font-bold leading-snug sm:text-base md:text-lg">{title}</h3>
         <p className="mt-2 flex-1 font-outfit text-xs leading-relaxed opacity-75 sm:text-sm">{desc}</p>

         <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.slice(0, MAX_TAGS).map((item) => (
               <span
                  key={item.tags}
                  className={cn(
                     'border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg dark:text-darkText sm:px-2 sm:text-[11px]',
                     item.color
                  )}
               >
                  {item.tags}
               </span>
            ))}

            {extraTags > 0 && (
               <span className="border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[10px] font-bold opacity-60 dark:border-darkBorder dark:bg-darkBg sm:px-2 sm:text-[11px]">
                  +{extraTags}
               </span>
            )}
         </div>

         <div className="mt-5">
            {link ? (
               <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-mainDark px-2.5 py-1.5 font-outfit text-[11px] font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-darkText dark:text-mainDark sm:gap-2 sm:px-3 sm:text-xs"
               >
                  View repository <ArrowUpRight size={14} />
               </Link>
            ) : (
               <span className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-bg px-2.5 py-1.5 font-outfit text-[11px] font-bold opacity-60 dark:border-darkBorder dark:bg-darkBg sm:gap-2 sm:px-3 sm:text-xs">
                  <Lock size={12} /> Private project
               </span>
            )}
         </div>
      </article>
   )
}

export default ItemProject
