import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ArticleItem } from '@/common/types/article'
import { cn } from '@/common/lib/utils'

interface ArticleCardProps {
   index: number
   data: ArticleItem
}

const shadows = [
   'shadow-[4px_4px_0px_0px_#F4CE14]',
   'shadow-[4px_4px_0px_0px_#25F4EE]',
   'shadow-[4px_4px_0px_0px_#E1306C]',
]

const accents = ['bg-[#F4CE14]', 'bg-[#25F4EE]', 'bg-[#E1306C]']

const ArticleCard = ({ index, data }: ArticleCardProps) => {
   const tags = data.tags.filter(Boolean)

   return (
      <Link
         href={data.link}
         target="_blank"
         rel="noreferrer"
         className={cn(
            'group flex h-full flex-col border-2 border-mainDark bg-main p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack',
            shadows[index % shadows.length]
         )}
      >
         <div className="flex items-start justify-between gap-3">
            <span
               className={cn(
                  'flex h-10 w-10 items-center justify-center border-2 border-mainDark text-lg text-mainDark dark:border-darkBorder',
                  accents[index % accents.length]
               )}
            >
               {data.logo}
            </span>
            <ArrowUpRight size={16} className="opacity-50 transition-opacity group-hover:opacity-100" />
         </div>

         <span className="mt-3 font-lexend text-sm font-bold">{data.title}</span>

         {data.description && (
            <span className="mt-1 flex-1 font-outfit text-xs opacity-70">{data.description}</span>
         )}

         {tags.length > 0 && (
            <span className="mt-3 flex flex-wrap gap-1.5">
               {tags.map((tag) => (
                  <span
                     key={tag}
                     className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg"
                  >
                     {tag}
                  </span>
               ))}
            </span>
         )}

         <span className="mt-3 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2">
            Open ↗
         </span>
      </Link>
   )
}

export default ArticleCard
