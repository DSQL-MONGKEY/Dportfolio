import { StaticImageData } from 'next/image'

export interface Cowork {
   name: string
   role: string
   tag: string
   opinion: string
   link: string
   image: StaticImageData | string
}

export interface JourneyItem {
   title: string
   role: string
   logo?: StaticImageData | ''
   shortName?: string
   date: string
   isPresent: boolean
   jobDesc: string
   coworks: Cowork[]
}
