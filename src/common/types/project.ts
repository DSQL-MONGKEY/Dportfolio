import { StaticImageData } from 'next/image'

export interface ProjectTech {
   tags: string
   color: string
}

export interface ProjectItem {
   title: string
   isFeatured: boolean
   techStack: ProjectTech[]
   desc: string
   image: StaticImageData
   link: string
}
