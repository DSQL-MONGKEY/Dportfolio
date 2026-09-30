"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { worlds, UniverseWorld } from '@/common/constants/universe'

const WorldCard = ({ world }: { world: UniverseWorld }) => {
   const Icon = world.icon

   return (
      <Link
         href={world.href}
         className="group flex h-full flex-col border-2 border-mainDark bg-main p-3 transition-transform hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack"
         style={{ boxShadow: `3px 3px 0px 0px ${world.accent}` }}
      >
         <span
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mainDark text-mainDark dark:border-darkBorder"
            style={{ backgroundColor: world.accent }}
         >
            <Icon size={18} />
         </span>
         <span className="mt-3 font-lexend text-xs font-bold">{world.label}</span>
         <span className="mt-1 line-clamp-2 flex-1 font-outfit text-[11px] leading-relaxed opacity-70">
            {world.description}
         </span>
         <span className="mt-2 flex items-center gap-1 font-outfit text-[10px] font-bold underline decoration-2 underline-offset-2">
            Enter <ArrowUpRight size={10} />
         </span>
      </Link>
   )
}

const constellation = worlds.map((world, index) => {
   const angle = (index * 60 * Math.PI) / 180
   const radius = index % 2 === 0 ? 40 : 26

   return {
      world,
      x: 50 + radius * Math.sin(angle),
      y: 50 - radius * Math.cos(angle),
   }
})

const UniverseMap = () => {
   return (
      <section>
         <div className="mb-4">
            <h2 className="font-lexend text-xl font-black uppercase tracking-[0.2em]">My Worlds</h2>
            <p className="mt-1 font-outfit text-sm opacity-70">
               Six worlds wired to the panda hub — hover a node, then jump in.
            </p>
         </div>

         <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
            <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full">
               <polygon
                  points={constellation.map((node) => `${node.x},${node.y}`).join(' ')}
                  fill="none"
                  strokeWidth={0.35}
                  className="stroke-mainDark/10 dark:stroke-darkText/10"
               />

               {constellation.map((node) => (
                  <line
                     key={node.world.id}
                     x1={50}
                     y1={50}
                     x2={node.x}
                     y2={node.y}
                     strokeWidth={0.4}
                     className="stroke-mainDark/20 dark:stroke-darkText/15"
                  />
               ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-mainDark bg-[#F4CE14] shadow-[4px_4px_0px_0px_#000] dark:border-darkBorder">
               <span className="text-2xl" aria-hidden>
                  🐼
               </span>
               <span className="font-lexend text-[10px] font-black uppercase tracking-[0.15em] text-mainDark">
                  me
               </span>
            </div>

            {constellation.map(({ world, x, y }) => {
               const Icon = world.icon
               const showAbove = y > 50

               return (
                  <div
                     key={world.id}
                     className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                     style={{ left: `${x}%`, top: `${y}%` }}
                  >
                     <Link
                        href={world.href}
                        aria-label={`Enter ${world.label}`}
                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-mainDark text-mainDark shadow-[3px_3px_0px_0px_#000] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainDark dark:border-darkBorder lg:h-16 lg:w-16"
                        style={{ backgroundColor: world.accent }}
                     >
                        <Icon size={22} />
                     </Link>

                     <span
                        className={cn(
                           'pointer-events-none absolute left-1/2 z-20 w-52 -translate-x-1/2 border-2 border-mainDark bg-main p-3 text-text opacity-0 shadow-[3px_3px_0px_0px_#000] transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText',
                           showAbove ? 'bottom-full mb-3' : 'top-full mt-3'
                        )}
                     >
                        <span className="flex items-center justify-between gap-2">
                           <span className="font-lexend text-xs font-black uppercase tracking-[0.1em]">
                              {world.label}
                           </span>
                           <ArrowUpRight size={12} />
                        </span>
                        <span className="mt-1 block font-outfit text-[11px] leading-relaxed opacity-70">
                           {world.description}
                        </span>
                     </span>
                  </div>
               )
            })}
         </div>

         <div className="grid grid-cols-2 gap-3 md:hidden">
            {worlds.map((world) => (
               <WorldCard key={world.id} world={world} />
            ))}
         </div>
      </section>
   )
}

export default UniverseMap
