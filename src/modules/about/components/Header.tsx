import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { MdRoundaboutRight } from 'react-icons/md'
import { aboutBio, aboutFacts, aboutStats } from '@/common/constants/about'

const Header = () => {
   return (
      <section className="border-2 border-mainDark bg-main p-5 shadow-[4px_4px_0px_0px_#F4CE14] dark:border-darkBorder dark:bg-secondaryBlack md:p-6">
         <div className="flex flex-wrap items-center gap-3">
            <MdRoundaboutRight className="h-9 w-9" />
            <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">About</h1>
            <span className="border-2 border-mainDark bg-[#8ad451] px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-mainDark">
               open for freelance
            </span>
         </div>

         <div className="mt-4 flex flex-wrap gap-2">
            {aboutFacts.map((fact) => (
               <span
                  key={fact}
                  className="border-2 border-mainDark bg-bg px-2.5 py-1 font-outfit text-xs font-bold dark:border-darkBorder dark:bg-darkBg"
               >
                  {fact}
               </span>
            ))}
         </div>

         <div className="mt-4 space-y-3">
            {aboutBio.map((paragraph) => (
               <p key={paragraph} className="max-w-2xl font-outfit text-sm leading-relaxed opacity-75">
                  {paragraph}
               </p>
            ))}
         </div>

         <div className="mt-5 grid grid-cols-3 gap-3 sm:max-w-md">
            {aboutStats.map((stat) => (
               <div
                  key={stat.label}
                  className="border-2 border-mainDark bg-bg p-3 dark:border-darkBorder dark:bg-darkBg"
               >
                  <span className="block font-lexend text-lg font-black">{stat.value}</span>
                  <span className="mt-1 block font-outfit text-[10px] font-bold uppercase tracking-[0.15em] opacity-60">
                     {stat.label}
                  </span>
               </div>
            ))}
         </div>

         <div className="mt-5 flex flex-wrap gap-3">
            <Link
               href="/projects"
               className="flex items-center gap-2 border-2 border-mainDark bg-shineRed px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[3px_3px_0px_0px_var(--neo-shadow-color)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--neo-shadow-color)] dark:border-mainDark"
            >
               View projects <ArrowUpRight size={14} />
            </Link>

            <Link
               href="/contact"
               className="flex items-center gap-2 border-2 border-mainDark bg-main px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-text shadow-[3px_3px_0px_0px_var(--neo-shadow-color)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--neo-shadow-color)] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText"
            >
               Get in touch <Mail size={14} />
            </Link>
         </div>
      </section>
   )
}

export default Header
