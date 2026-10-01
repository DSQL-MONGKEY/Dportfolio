"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check, Lock, Star } from 'lucide-react'
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
         <DialogContent className="max-h-[85vh] min-h-0 overflow-y-auto rounded-none border-2 border-mainDark bg-main p-5 shadow-[6px_6px_0px_0px_var(--neo-shadow-color)] dark:border-darkBorder dark:bg-secondaryBlack">
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
                  <span className="flex items-center gap-1 border-2 border-mainDark bg-mainDark px-2 py-0.5 font-outfit text-[10px] font-black uppercase tracking-[0.1em] text-main dark:border-mainDark dark:bg-darkText dark:text-mainDark">
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

            {project.highlights && project.highlights.length > 0 && (
               <ul className="mt-4 flex flex-col gap-2">
                  {project.highlights.map((highlight) => (
                     <li
                        key={highlight}
                        className="flex items-start gap-2 font-outfit text-xs leading-relaxed"
                     >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border-2 border-mainDark bg-[#8ad451] text-mainDark dark:border-mainDark">
                           <Check size={10} strokeWidth={3} />
                        </span>
                        <span className="opacity-80">{highlight}</span>
                     </li>
                  ))}
               </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
               {project.links && project.links.length > 0 ? (
                  project.links.map((link) => (
                     <Link
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-mainDark bg-mainDark px-3 py-1.5 font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-mainDark dark:bg-darkText dark:text-mainDark"
                     >
                        {link.label} <ArrowUpRight size={14} />
                     </Link>
                  ))
               ) : project.link ? (
                  <Link
                     href={project.link}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 border-2 border-mainDark bg-mainDark px-3 py-1.5 font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-mainDark dark:bg-darkText dark:text-mainDark"
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
