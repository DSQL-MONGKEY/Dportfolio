import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import TypeAnimation from '@/components/elements/TypeAnimation'

const facts = ['Software / IoT Engineer', 'Depok, Indonesia']

const Intro = () => {
   return (
      <section className="border-2 border-mainDark bg-main p-5 shadow-[4px_4px_0px_0px_#F4CE14] dark:border-darkBorder dark:bg-secondaryBlack md:p-6">
         <div className="flex items-start justify-between gap-4">
            <div className="text-2xl font-lexend dark:text-white md:text-3xl">
               <TypeAnimation
                  sequence={[`Hi, i'm Dimas Prasetyo`, `Hi, i'm Software Engineer`]}
                  delay={3000}
               />
            </div>
            <span className="text-3xl md:text-4xl" aria-hidden>
               🐼
            </span>
         </div>

         <p className="mt-4 max-w-2xl font-outfit text-sm leading-relaxed opacity-75">
            I build modern, user-focused web, mobile, and IoT products — from real-time dashboards
            to connected devices. My toolkit is TypeScript, React/Next.js, and Node.js, applied to
            whatever the problem actually needs.
         </p>

         <div className="mt-4 flex flex-wrap gap-2">
            {facts.map((fact) => (
               <span
                  key={fact}
                  className="border-2 border-mainDark bg-bg px-2.5 py-1 font-outfit text-xs font-bold dark:border-darkBorder dark:bg-darkBg"
               >
                  {fact}
               </span>
            ))}
         </div>

         <div className="mt-5 flex flex-wrap gap-3">
            <Link
               href="/projects"
               className="flex items-center gap-2 border-2 border-mainDark bg-shineRed px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder"
            >
               View projects <ArrowUpRight size={14} />
            </Link>

            <Link
               href="/contact"
               className="flex items-center gap-2 border-2 border-mainDark bg-main px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-text shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText"
            >
               Get in touch <Mail size={14} />
            </Link>
         </div>
      </section>
   )
}

export default Intro
