"use client"

import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { cn } from '@/common/lib/utils'

interface JourneyCardProps {
   title: string
   role: string
   date: string
   isPresent: boolean
   logo?: StaticImageData | ''
   shortName?: string
   shadow: string
}

const JourneyCard = ({ title, role, date, isPresent, logo, shortName, shadow }: JourneyCardProps) => {
   return (
      <div
         className={cn(
            'group flex h-full w-full flex-col border-2 border-mainDark bg-main p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack md:p-5',
            shadow
         )}
      >
         <div className="flex items-start justify-between gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg">
               {logo ? (
                  <Image
                     src={logo}
                     alt={title}
                     width={28}
                     height={28}
                     className="h-7 w-7 object-contain"
                  />
               ) : (
                  <span className="font-lexend text-[10px] font-black">{shortName}</span>
               )}
            </span>

            {isPresent && (
               <span className="flex items-center gap-1.5 border-2 border-mainDark bg-[#8ad451] px-2 py-0.5 font-outfit text-[10px] font-black uppercase tracking-[0.1em] text-mainDark dark:border-darkBorder">
                  <span className="h-2 w-2 rounded-full bg-mainDark" />
                  Present
               </span>
            )}
         </div>

         <h3 className="mt-3 font-lexend text-base font-bold leading-snug md:text-lg">{title}</h3>
         <p className="mt-1 font-outfit text-sm opacity-80">{role}</p>

         <span className="mt-3 inline-block w-fit border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[11px] font-bold dark:border-darkBorder dark:bg-darkBg">
            {date}
         </span>

         <span className="mt-4 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2 opacity-70 transition-opacity group-hover:opacity-100">
            Details ↗
         </span>
      </div>
   )
}

export default JourneyCard
