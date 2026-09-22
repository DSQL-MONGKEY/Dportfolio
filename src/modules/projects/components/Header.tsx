import { LucideSquareSigma } from 'lucide-react'
import React from 'react'
import { projects } from '@/common/constants/constants'

const Header = () => {
   const featured = projects.filter((item) => item.isFeatured).length
   const techCount = new Set(projects.flatMap((item) => item.techStack.map((tech) => tech.tags))).size

   const stats = [
      {
         label: 'Projects',
         value: projects.length,
         accent: 'bg-[#F4CE14]',
         shadow: 'shadow-[3px_3px_0px_0px_#F4CE14]',
      },
      {
         label: 'Featured',
         value: featured,
         accent: 'bg-[#25F4EE]',
         shadow: 'shadow-[3px_3px_0px_0px_#25F4EE]',
      },
      {
         label: 'Technologies',
         value: techCount,
         accent: 'bg-[#E1306C]',
         shadow: 'shadow-[3px_3px_0px_0px_#E1306C]',
      },
   ]

   return (
      <section className="space-y-5">
         <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">Projects</h1>
            <span className="border-2 border-mainDark bg-[#F4CE14] px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
               featured first
            </span>
         </div>

         <p className="max-w-2xl font-outfit text-sm opacity-70">
            Things I designed, built, and shipped — from IoT devices and automation to full-stack
            web and mobile apps.
         </p>

         <div className="grid grid-cols-3 gap-3 sm:max-w-md">
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
      </section>
   )
}

export default Header
