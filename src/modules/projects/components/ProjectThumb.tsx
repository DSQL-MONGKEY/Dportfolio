import React from 'react'
import Image from 'next/image'
import { cn } from '@/common/lib/utils'
import { ProjectItem } from '@/common/types/project'

const initials = (title: string) =>
   title
      .replace(/[^a-zA-Z0-9 ]/g, ' ')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? '')
      .join('')

interface ProjectThumbProps {
   project: ProjectItem
   className?: string
}

const ProjectThumb = ({ project, className }: ProjectThumbProps) => {
   if (project.image) {
      return (
         <div
            className={cn(
               'relative overflow-hidden border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg',
               className
            )}
         >
            <Image
               src={project.image}
               alt={project.title}
               fill
               sizes="(max-width: 640px) 85vw, 420px"
               className="object-cover"
            />
         </div>
      )
   }

   return (
      <div
         className={cn(
            'flex items-center justify-center border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg',
            className
         )}
      >
         <span className="font-lexend text-lg font-black tracking-[0.2em] opacity-60">
            {project.shortName ?? initials(project.title)}
         </span>
      </div>
   )
}

export default ProjectThumb
