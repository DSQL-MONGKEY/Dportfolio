"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Lock, Star } from 'lucide-react'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/common/lib/utils'
import { getCategoryMeta } from '@/common/constants/projects'
import { ProjectItem } from '@/common/types/project'
import ProjectThumb from './ProjectThumb'

interface ProjectModalProps {
   project: ProjectItem | null
   onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
   if (!project) return null

   const category = getCategoryMeta(project.category)

   return (
      <Dialog
         open
         onOpenChange={(open) => {
            if (!open) onClose()
         }}
      >
         <DialogContent className="max-h-[85vh] min-h-0 overflow-y-auto rounded-none border-2 border-mainDark bg-main p-5 shadow-[6px_6px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack">
            <DialogTitle className="sr-only">{project.title}</DialogTitle>
            <DialogDescription className="sr-only">{project.desc}</DialogDescription>

            <ProjectThumb project={project} className="aspect-video w-full" />

            <div className="mt-4 flex flex-wrap items-center gap-2">
               <span
                  className={cn(
                     'border-2 border-mainDark px-2 py-0.5 font-lexend text-[10px] font-black uppercase tracking-[0.15em] text-mainDark dark:border-darkBorder',
                     category.accent
                  )}
               >
                  {category.label}
               </span>

               {project.isFeatured && (
                  <span className="flex items-center gap-1 border-2 border-mainDark bg-mainDark px-2 py-0.5 font-outfit text-[10px] font-black uppercase tracking-[0.1em] text-main dark:border-darkBorder dark:bg-darkText dark:text-mainDark">
                     <Star size={10} fill="currentColor" /> Featured
                  </span>
               )}
            </div>

            <h3 className="mt-3 font-lexend text-lg font-bold leading-snug">{project.title}</h3>
            <p className="mt-2 font-outfit text-sm leading-relaxed opacity-80">{project.desc}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
               {project.techStack.map((tech) => (
                  <span
                     key={tech.tags}
                     className={cn(
                        'border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[11px] font-bold dark:border-darkBorder dark:bg-darkBg dark:text-darkText',
                        tech.color
                     )}
                  >
                     {tech.tags}
                  </span>
               ))}
            </div>

            <div className="mt-5">
               {project.link ? (
                  <Link
                     href={project.link}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 border-2 border-mainDark bg-mainDark px-3 py-1.5 font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-darkText dark:text-mainDark"
                  >
                     View repository <ArrowUpRight size={14} />
                  </Link>
               ) : (
                  <span className="inline-flex items-center gap-2 border-2 border-mainDark bg-bg px-3 py-1.5 font-outfit text-xs font-bold opacity-60 dark:border-darkBorder dark:bg-darkBg">
                     <Lock size={12} /> Private project
                  </span>
               )}
            </div>
         </DialogContent>
      </Dialog>
   )
}

export default ProjectModal
