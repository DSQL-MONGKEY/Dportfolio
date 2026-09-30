"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { cards } from '@/common/constants/constants'

const WiseStars = () => {
   const [index, setIndex] = useState(0)
   const active = cards[index]

   const go = (direction: 1 | -1) => {
      setIndex((prev) => (prev + direction + cards.length) % cards.length)
   }

   return (
      <section>
         <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
               <h2 className="font-lexend text-xl font-black uppercase tracking-[0.2em]">Wise Stars</h2>
               <p className="mt-1 font-outfit text-sm opacity-70">
                  Quotes that keep me oriented — plus one of my own.
               </p>
            </div>

            <div className="flex items-center gap-2">
               <button
                  type="button"
                  aria-label="Previous quote"
                  onClick={() => go(-1)}
                  className="flex h-9 w-9 items-center justify-center border-2 border-mainDark bg-main shadow-[3px_3px_0px_0px_#000] transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <ChevronLeft size={16} />
               </button>
               <button
                  type="button"
                  aria-label="Next quote"
                  onClick={() => go(1)}
                  className="flex h-9 w-9 items-center justify-center border-2 border-mainDark bg-main shadow-[3px_3px_0px_0px_#000] transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <ChevronRight size={16} />
               </button>
            </div>
         </div>

         <div className="border-2 border-mainDark bg-main p-5 shadow-[4px_4px_0px_0px_#F4CE14] dark:border-darkBorder dark:bg-secondaryBlack md:p-6">
            <Star size={20} className="text-[#F4CE14]" fill="currentColor" />

            <blockquote className="mt-3 font-outfit text-base italic leading-relaxed md:text-lg">
               {active.content}
            </blockquote>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
               <div>
                  <span className="block font-lexend text-xs font-black uppercase tracking-[0.1em]">
                     {active.name}
                  </span>
                  <span className="block font-outfit text-[11px] opacity-60">
                     {active.designation}
                  </span>
               </div>
               <span className="font-outfit text-xs font-bold opacity-60">
                  {index + 1} / {cards.length}
               </span>
            </div>
         </div>

         <div className="mt-3 flex justify-center gap-2">
            {cards.map((card, dotIndex) => (
               <button
                  key={card.id}
                  type="button"
                  aria-label={`Quote ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                  className={cn(
                     'h-2.5 w-2.5 rounded-full border border-mainDark transition-transform dark:border-darkBorder',
                     dotIndex === index ? 'scale-125 bg-[#F4CE14]' : 'bg-bg dark:bg-darkBg'
                  )}
               />
            ))}
         </div>
      </section>
   )
}

export default WiseStars
