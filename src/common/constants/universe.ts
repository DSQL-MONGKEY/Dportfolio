import { BookOpen, Briefcase, Code2, Layers, Music, Users, type LucideIcon } from 'lucide-react'

export interface UniverseWorld {
   id: string
   label: string
   description: string
   href: string
   icon: LucideIcon
   accent: string
}

export const worlds: UniverseWorld[] = [
   {
      id: 'code',
      label: 'Code',
      description: 'Full-stack, IoT, and mobile projects I shipped.',
      href: '/projects',
      icon: Code2,
      accent: '#F4CE14',
   },
   {
      id: 'stack',
      label: 'Stack',
      description: 'The technologies, tools, and DevOps I use.',
      href: '/tech',
      icon: Layers,
      accent: '#25F4EE',
   },
   {
      id: 'career',
      label: 'Career',
      description: 'From vocational school to fullstack engineer.',
      href: '/journeys',
      icon: Briefcase,
      accent: '#E1306C',
   },
   {
      id: 'sound',
      label: 'Sound',
      description: 'Tracks on repeat and the music box.',
      href: '/playlist',
      icon: Music,
      accent: '#8ad451',
   },
   {
      id: 'social',
      label: 'Social',
      description: 'TikToks, Instagram, and commit activity.',
      href: '/feeds',
      icon: Users,
      accent: '#F55353',
   },
   {
      id: 'notes',
      label: 'Notes',
      description: 'Writing spaces and references I keep.',
      href: '/',
      icon: BookOpen,
      accent: '#B983FF',
   },
]
