"use client"

import React, { useMemo, useState } from 'react'
import { projects } from '@/common/constants/constants'
import { projectCategories } from '@/common/constants/projects'
import { ProjectCategory, ProjectItem } from '@/common/types/project'
import FeaturedSpotlight from './FeaturedSpotlight'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const sortedProjects = [...projects].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured))
const featuredProjects = sortedProjects.filter((project) => project.isFeatured)

const Showcase = () => {
   const [query, setQuery] = useState('')
   const [category, setCategory] = useState<ProjectCategory | 'all'>('all')
   const [tech, setTech] = useState<string | null>(null)
   const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

   const normalizedQuery = query.trim().toLowerCase()
   const hasFilters = normalizedQuery !== '' || category !== 'all' || tech !== null

   const baseFiltered = sortedProjects.filter((project) => {
      const matchesQuery =
         !normalizedQuery ||
         project.title.toLowerCase().includes(normalizedQuery) ||
         project.desc.toLowerCase().includes(normalizedQuery) ||
         project.techStack.some((item) => item.tags.toLowerCase().includes(normalizedQuery))
      const matchesTech = !tech || project.techStack.some((item) => item.tags === tech)

      return matchesQuery && matchesTech
   })

   const counts = useMemo(() => {
      const result: Record<string, number> = { all: baseFiltered.length }

      projectCategories.forEach((item) => {
         result[item.id] = baseFiltered.filter((project) => project.category === item.id).length
      })

      return result
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [query, tech])

   const filtered = baseFiltered.filter(
      (project) => category === 'all' || project.category === category
   )

   const clearFilters = () => {
      setQuery('')
      setCategory('all')
      setTech(null)
   }

   return (
      <div className="space-y-6">
         {!hasFilters && (
            <FeaturedSpotlight projects={featuredProjects} onOpen={setSelectedProject} />
         )}

         <FilterBar
            query={query}
            onQueryChange={setQuery}
            category={category}
            onCategoryChange={setCategory}
            tech={tech}
            onTechChange={setTech}
            counts={counts}
            shown={filtered.length}
            total={projects.length}
            hasFilters={hasFilters}
            onClear={clearFilters}
         />

         {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
               {filtered.map((project, index) => (
                  <ProjectCard
                     key={project.title}
                     project={project}
                     index={index}
                     onOpen={setSelectedProject}
                  />
               ))}
            </div>
         ) : (
            <div className="border-2 border-mainDark bg-main p-8 text-center dark:border-darkBorder dark:bg-secondaryBlack">
               <p className="font-lexend text-sm font-bold">No projects match those filters</p>
               <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-3 border-2 border-mainDark bg-[#F4CE14] px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder"
               >
                  Clear filters
               </button>
            </div>
         )}

         <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
   )
}

export default Showcase
