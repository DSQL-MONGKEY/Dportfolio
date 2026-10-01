import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { journeys } from '@/common/constants/constants'

const ExperienceSnapshot = () => {
   const recent = [...journeys].reverse().slice(0, 4)

   return (
      <section>
         <NeoSectionHeading
            title="Experience"
            description="Recent roles and where I have worked."
            badge="snapshot"
            badgeClassName="bg-[#F4CE14]"
         />

         <div className="flex flex-col gap-3">
            {recent.map((item) => (
               <div
                  key={item.title}
                  className="flex flex-wrap items-center gap-3 border-2 border-mainDark bg-main p-3 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg">
                     {item.logo ? (
                        <Image
                           src={item.logo}
                           alt={item.title}
                           width={24}
                           height={24}
                           className="h-6 w-6 object-contain"
                        />
                     ) : (
                        <span className="font-lexend text-[9px] font-black">{item.shortName}</span>
                     )}
                  </span>

                  <span className="min-w-0 flex-1">
                     <span className="block truncate font-lexend text-sm font-bold">{item.title}</span>
                     <span className="block truncate font-outfit text-xs opacity-70">
                        {item.role}
                     </span>
                  </span>

                  <span className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg">
                     {item.date}
                  </span>
               </div>
            ))}
         </div>

         <div className="mt-3">
            <Link
               href="/journeys"
               className="inline-flex items-center gap-1.5 font-outfit text-xs font-bold underline decoration-2 underline-offset-2"
            >
               See the full journey <ArrowUpRight size={12} />
            </Link>
         </div>
      </section>
   )
}

export default ExperienceSnapshot
