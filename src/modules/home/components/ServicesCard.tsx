import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/common/lib/utils'

interface ServicesCardProps {
   icon: JSX.Element
   index: number
   title: string
   description: string
}

const shadows = [
   'shadow-[4px_4px_0px_0px_#F4CE14]',
   'shadow-[4px_4px_0px_0px_#25F4EE]',
   'shadow-[4px_4px_0px_0px_#8ad451]',
   'shadow-[4px_4px_0px_0px_#E1306C]',
]

const accents = ['bg-[#F4CE14]', 'bg-[#25F4EE]', 'bg-[#8ad451]', 'bg-[#E1306C]']

const ServicesCard = ({ icon, index, title, description }: ServicesCardProps) => {
   return (
      <div
         className={cn(
            'flex flex-col border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack',
            shadows[index % shadows.length]
         )}
      >
         <span
            className={cn(
               'flex h-11 w-11 items-center justify-center border-2 border-mainDark text-xl text-mainDark dark:border-darkBorder',
               accents[index % accents.length]
            )}
         >
            {icon}
         </span>

         <h3 className="mt-3 font-lexend text-sm font-bold">{title}</h3>
         <p className="mt-1 flex-1 font-outfit text-xs leading-relaxed opacity-75">{description}</p>

         <Link
            href="/contact"
            className="mt-4 inline-flex w-fit items-center gap-1.5 border-2 border-mainDark bg-mainDark px-3 py-1.5 font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-darkText dark:text-mainDark"
         >
            Start a project <ArrowUpRight size={14} />
         </Link>
      </div>
   )
}

export default ServicesCard
