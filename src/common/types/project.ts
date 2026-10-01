import { StaticImageData } from 'next/image'

export type ProjectCategory = 'web' | 'iot' | 'mobile' | 'uiux' | 'automation'

export interface ProjectTech {
   tags: string
   color: string
}

export interface ProjectLink {
   label: string
   url: string
}

export interface ProjectItem {
   title: string
   isFeatured: boolean
   category: ProjectCategory
   techStack: ProjectTech[]
   desc: string
   image?: StaticImageData | ''
   link: string
   links?: ProjectLink[]
   highlights?: string[]
   shortName?: string
}
