"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { getCategoryMeta } from '@/common/constants/projects'
import { ProjectItem } from '@/common/types/project'
import ProjectThumb from './ProjectThumb'

interface FeaturedSpotlightProps {
   projects: ProjectItem[]
   onOpen: (project: ProjectItem) => void
}

const MAX_TAGS = 4

const FeaturedSpotlight = ({ projects, onOpen }: FeaturedSpotlightProps) => {
   const scrollRef = useRef<HTMLDivElement | null>(null)

   const scrollByPage = (direction: 1 | -1) => {
      const container = scrollRef.current
      if (!container) return

      container.scrollBy({
         left: direction * container.clientWidth * 0.85,
         behavior: 'smooth',
      })
   }

   return (
      <section>
         <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
               <h2 className="font-lexend text-xl font-black uppercase tracking-[0.2em]">Spotlight</h2>
               <p className="mt-1 font-outfit text-sm opacity-70">
                  The projects I am most proud of — swipe or use the arrows.
               </p>
            </div>

            <div className="flex items-center gap-2">
               <button
                  type="button"
                  aria-label="Previous projects"
                  onClick={() => scrollByPage(-1)}
                  className="flex h-9 w-9 items-center justify-center border-2 border-mainDark bg-main shadow-[3px_3px_0px_0px_var(--neo-shadow-color)] transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <ChevronLeft size={16} />
               </button>
               <button
                  type="button"
                  aria-label="Next projects"
                  onClick={() => scrollByPage(1)}
                  className="flex h-9 w-9 items-center justify-center border-2 border-mainDark bg-main shadow-[3px_3px_0px_0px_var(--neo-shadow-color)] transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <ChevronRight size={16} />
               </button>
            </div>
         </div>

         <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
         >
            {projects.map((project, index) => {
               const category = getCategoryMeta(project.category)
               const extraTags = project.techStack.length - MAX_TAGS

               return (
                  <article
                     key={project.title}
                     className={cn(
                        'flex w-[85%] shrink-0 snap-start flex-col border-2 border-mainDark bg-main transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack sm:w-[48%]',
                        index % 2 === 0
                           ? 'shadow-[4px_4px_0px_0px_#F4CE14]'
                           : 'shadow-[4px_4px_0px_0px_#25F4EE]'
                     )}
                  >
                     <ProjectThumb
                        project={project}
                        className="aspect-video w-full border-0 border-b-2 border-mainDark dark:border-darkBorder"
                     />

                     <div className="flex flex-1 flex-col p-4">
                        <div className="flex items-center justify-between gap-2">
                           <span
                              className={cn(
                                 'border-2 border-mainDark px-2 py-0.5 font-lexend text-[10px] font-black uppercase tracking-[0.15em] text-mainDark dark:border-darkBorder',
                                 category.accent
                              )}
                           >
                              {category.label}
                           </span>
                           <Star size={14} className="text-[#F4CE14]" fill="currentColor" />
                        </div>

                        <h3 className="mt-3 font-lexend text-base font-bold leading-snug">
                           {project.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 font-outfit text-xs leading-relaxed opacity-75 sm:text-sm">
                           {project.desc}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                           {project.techStack.slice(0, MAX_TAGS).map((item) => (
                              <span
                                 key={item.tags}
                                 className={cn(
                                    'border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg dark:text-darkText',
                                    item.color
                                 )}
                              >
                                 {item.tags}
                              </span>
                           ))}

                           {extraTags > 0 && (
                              <span className="border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[10px] font-bold opacity-60 dark:border-darkBorder dark:bg-darkBg">
                                 +{extraTags}
                              </span>
                           )}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                           <button
                              type="button"
                              onClick={() => onOpen(project)}
                              className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-mainDark px-3 py-1.5 font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-mainDark dark:bg-darkText dark:text-mainDark"
                           >
                              Quick view
                           </button>

                           {project.link && (
                              <Link
                                 href={project.link}
                                 target="_blank"
                                 rel="noreferrer"
                                 className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-main px-3 py-1.5 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
                              >
                                 Repo <ArrowUpRight size={12} />
                              </Link>
                           )}
                        </div>
                     </div>
                  </article>
               )
            })}
         </div>
      </section>
   )
}

export default FeaturedSpotlight
