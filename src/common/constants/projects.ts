import { ProjectCategory } from '@/common/types/project'

export interface ProjectCategoryMeta {
   id: ProjectCategory
   label: string
   accent: string
   shadow: string
}

export const projectCategories: ProjectCategoryMeta[] = [
   {
      id: 'web',
      label: 'Web',
      accent: 'bg-[#F4CE14]',
      shadow: 'shadow-[3px_3px_0px_0px_#F4CE14]',
   },
   {
      id: 'iot',
      label: 'IoT',
      accent: 'bg-[#25F4EE]',
      shadow: 'shadow-[3px_3px_0px_0px_#25F4EE]',
   },
   {
      id: 'mobile',
      label: 'Mobile',
      accent: 'bg-[#E1306C]',
      shadow: 'shadow-[3px_3px_0px_0px_#E1306C]',
   },
   {
      id: 'uiux',
      label: 'UI/UX',
      accent: 'bg-[#8ad451]',
      shadow: 'shadow-[3px_3px_0px_0px_#8ad451]',
   },
   {
      id: 'automation',
      label: 'Automation',
      accent: 'bg-[#F55353]',
      shadow: 'shadow-[3px_3px_0px_0px_#F55353]',
   },
]

export const getCategoryMeta = (id: ProjectCategory) =>
   projectCategories.find((category) => category.id === id) ?? projectCategories[0]

export const topTechs = [
   'Typescript',
   'TailwindCSS',
   'NextJS',
   'ReactJS',
   'Clerk',
   'Rapid-API',
   'Tanstack-query',
   'Zustand',
   'NodeJS',
   'Vite',
]
