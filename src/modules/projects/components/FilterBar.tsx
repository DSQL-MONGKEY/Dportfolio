"use client"

import React from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { projectCategories, topTechs } from '@/common/constants/projects'
import { ProjectCategory } from '@/common/types/project'

interface FilterBarProps {
   query: string
   onQueryChange: (value: string) => void
   category: ProjectCategory | 'all'
   onCategoryChange: (value: ProjectCategory | 'all') => void
   tech: string | null
   onTechChange: (value: string | null) => void
   counts: Record<string, number>
   shown: number
   total: number
   hasFilters: boolean
   onClear: () => void
}

const FilterBar = ({
   query,
   onQueryChange,
   category,
   onCategoryChange,
   tech,
   onTechChange,
   counts,
   shown,
   total,
   hasFilters,
   onClear,
}: FilterBarProps) => {
   return (
      <section className="space-y-3 border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack">
         <label className="relative block">
            <span className="sr-only">Search projects</span>
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
            <input
               type="text"
               value={query}
               onChange={(event) => onQueryChange(event.target.value)}
               placeholder="Search title, description, or tech…"
               className="w-full border-2 border-mainDark bg-bg py-2 pl-9 pr-3 font-outfit text-sm outline-none transition-shadow placeholder:opacity-50 focus:shadow-[3px_3px_0px_0px_#000] dark:border-darkBorder dark:bg-darkBg"
            />
         </label>

         <div className="flex flex-wrap gap-2">
            <button
               type="button"
               onClick={() => onCategoryChange('all')}
               aria-pressed={category === 'all'}
               className={cn(
                  'border-2 border-mainDark px-2.5 py-1 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
                  category === 'all'
                     ? 'bg-mainDark text-main dark:bg-darkText dark:text-mainDark'
                     : 'bg-bg dark:bg-darkBg'
               )}
            >
               All <span className="opacity-60">{counts.all}</span>
            </button>

            {projectCategories.map((item) => (
               <button
                  key={item.id}
                  type="button"
                  onClick={() => onCategoryChange(item.id)}
                  aria-pressed={category === item.id}
                  className={cn(
                     'border-2 border-mainDark px-2.5 py-1 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
                     category === item.id
                        ? `${item.accent} text-mainDark`
                        : 'bg-bg dark:bg-darkBg'
                  )}
               >
                  {item.label} <span className="opacity-60">{counts[item.id] ?? 0}</span>
               </button>
            ))}
         </div>

         <div className="flex flex-wrap gap-2">
            {topTechs.map((item) => (
               <button
                  key={item}
                  type="button"
                  onClick={() => onTechChange(tech === item ? null : item)}
                  aria-pressed={tech === item}
                  className={cn(
                     'border-2 border-mainDark px-2 py-0.5 font-outfit text-[11px] font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
                     tech === item
                        ? 'bg-[#F4CE14] text-mainDark'
                        : 'bg-main dark:bg-secondaryBlack'
                  )}
               >
                  {item}
               </button>
            ))}
         </div>

         <div className="flex flex-wrap items-center justify-between gap-2 font-outfit text-xs font-bold">
            <span className="opacity-70">
               Showing {shown} of {total} projects
            </span>

            {hasFilters && (
               <button
                  type="button"
                  onClick={onClear}
                  className="flex items-center gap-1 underline decoration-2 underline-offset-2"
               >
                  <X size={12} /> Clear all
               </button>
            )}
         </div>
      </section>
   )
}

export default FilterBar
