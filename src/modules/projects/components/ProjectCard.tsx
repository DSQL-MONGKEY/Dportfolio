"use client"

import React from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { getCategoryMeta } from '@/common/constants/projects'
import { ProjectItem } from '@/common/types/project'

const shadows = [
   'shadow-[4px_4px_0px_0px_#F4CE14]',
   'shadow-[4px_4px_0px_0px_#25F4EE]',
   'shadow-[4px_4px_0px_0px_#E1306C]',
   'shadow-[4px_4px_0px_0px_#8ad451]',
]

const MAX_TAGS = 4

interface ProjectCardProps {
   project: ProjectItem
   index: number
   onOpen: (project: ProjectItem) => void
}

const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
   const category = getCategoryMeta(project.category)
   const extraTags = project.techStack.length - MAX_TAGS

   return (
      <button
         type="button"
         onClick={() => onOpen(project)}
         className={cn(
            'group flex h-full flex-col border-2 border-mainDark bg-main p-3 text-left transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack sm:p-4',
            shadows[index % shadows.length]
         )}
      >
         <div className="flex items-center justify-between gap-2">
            <span
               className={cn(
                  'border-2 border-mainDark px-1.5 py-0.5 font-lexend text-[10px] font-black uppercase tracking-[0.1em] text-mainDark dark:border-darkBorder',
                  category.accent
               )}
            >
               {category.label}
            </span>

            {project.isFeatured && <Star size={14} className="text-[#F4CE14]" fill="currentColor" />}
         </div>

         <h3 className="mt-3 font-lexend text-sm font-bold leading-snug sm:text-base">
            {project.title}
         </h3>
         <p className="mt-1.5 line-clamp-2 flex-1 font-outfit text-xs leading-relaxed opacity-75 sm:text-sm">
            {project.desc}
         </p>

         <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, MAX_TAGS).map((item) => (
               <span
                  key={item.tags}
                  className={cn(
                     'border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg dark:text-darkText sm:text-[11px]',
                     item.color
                  )}
               >
                  {item.tags}
               </span>
            ))}

            {extraTags > 0 && (
               <span className="border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[10px] font-bold opacity-60 dark:border-darkBorder dark:bg-darkBg sm:text-[11px]">
                  +{extraTags}
               </span>
            )}
         </div>

         <span className="mt-3 flex items-center gap-1 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2 opacity-70 transition-opacity group-hover:opacity-100">
            Quick view <ArrowUpRight size={12} />
         </span>
      </button>
   )
}

export default ProjectCard
