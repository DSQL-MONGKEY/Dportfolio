import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { devOps, journeys, projects, tech, tools } from '@/common/constants/constants'

const stats = [
   {
      label: 'Projects shipped',
      value: projects.length,
      accent: 'bg-[#F4CE14]',
      shadow: 'shadow-[3px_3px_0px_0px_#F4CE14]',
   },
   {
      label: 'Tech & tools',
      value: tech.length + tools.length + devOps.length,
      accent: 'bg-[#25F4EE]',
      shadow: 'shadow-[3px_3px_0px_0px_#25F4EE]',
   },
   {
      label: 'Experiences',
      value: journeys.length,
      accent: 'bg-[#E1306C]',
      shadow: 'shadow-[3px_3px_0px_0px_#E1306C]',
   },
]

const Highlights = () => {
   return (
      <section className="space-y-4">
         <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
               <div
                  key={stat.label}
                  className={`border-2 border-mainDark bg-main p-3 dark:border-darkBorder dark:bg-secondaryBlack ${stat.shadow}`}
               >
                  <span
                     className={`inline-block border-2 border-mainDark px-2 py-0.5 font-lexend text-sm font-black text-mainDark dark:border-darkBorder ${stat.accent}`}
                  >
                     {stat.value}
                  </span>
                  <p className="mt-2 font-outfit text-[11px] font-bold uppercase tracking-[0.15em] opacity-60">
                     {stat.label}
                  </p>
               </div>
            ))}
         </div>

         <div className="flex flex-wrap items-center justify-between gap-4 border-2 border-mainDark bg-[#F4CE14] p-4 shadow-[4px_4px_0px_0px_#000] dark:border-darkBorder">
            <div>
               <p className="font-lexend text-sm font-black uppercase tracking-[0.15em] text-mainDark">
                  Open for freelance
               </p>
               <p className="mt-1 font-outfit text-xs font-bold text-mainDark/80">
                  Have a project in mind? I usually reply within ~24 hours.
               </p>
            </div>

            <Link
               href="/contact"
               className="flex items-center gap-2 border-2 border-mainDark bg-mainDark px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-main shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder dark:bg-darkText dark:text-mainDark"
            >
               Start a project <ArrowUpRight size={14} />
            </Link>
         </div>
      </section>
   )
}

export default Highlights
