import React from 'react'
import Marquee from '@/components/ui/Marquee'
import { journeys } from '@/common/constants/constants'

const stats = [
   {
      label: 'Experiences',
      value: journeys.length,
      accent: 'bg-[#F4CE14]',
      shadow: 'shadow-[3px_3px_0px_0px_#F4CE14]',
   },
   {
      label: 'People met',
      value: journeys.reduce((sum, item) => sum + item.coworks.length, 0),
      accent: 'bg-[#25F4EE]',
      shadow: 'shadow-[3px_3px_0px_0px_#25F4EE]',
   },
   {
      label: 'Since',
      value: 2020,
      accent: 'bg-[#E1306C]',
      shadow: 'shadow-[3px_3px_0px_0px_#E1306C]',
   },
]

const Header = () => {
   return (
      <section className="space-y-5">
         <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">Journey</h1>
            <span className="border-2 border-mainDark bg-[#F4CE14] px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
               newest first
            </span>
            <span className="border-2 border-mainDark bg-main px-2 py-0.5 font-outfit text-xs font-bold dark:border-darkBorder dark:bg-secondaryBlack">
               tap a card for details
            </span>
         </div>

         <p className="max-w-2xl font-outfit text-sm opacity-70">
            Every step below is a trail of courage, self-discovery, and a willingness to grow from
            ground zero — from vocational school to fullstack engineering, with the people I met
            along the way.
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

         <Marquee
            key="journey-banner"
            className="border-2 border-mainDark bg-mainDark py-2 [--duration:25s] dark:border-darkBorder"
         >
            {journeys.map((item) => (
               <span
                  key={item.title}
                  className="whitespace-nowrap px-4 font-lexend text-xs font-black uppercase tracking-[0.2em] text-main dark:text-darkText"
               >
                  {item.title} ✦
               </span>
            ))}
         </Marquee>
      </section>
   )
}

export default Header
