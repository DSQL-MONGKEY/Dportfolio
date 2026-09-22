"use client"

import React from 'react'
import ItemCard from './ItemCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { devOps, tech, tools } from '@/common/constants/constants'
import PulseNotif from '@/components/elements/PulseNotif'

const tabItems = [
   {
      value: 'tech',
      label: 'Techs',
      items: tech,
      activeClass: 'data-[state=active]:bg-[#F4CE14]',
   },
   {
      value: 'tools',
      label: 'Tools',
      items: tools,
      activeClass: 'data-[state=active]:bg-[#25F4EE]',
   },
   {
      value: 'devops',
      label: 'DevOps',
      items: devOps,
      activeClass: 'data-[state=active]:bg-[#E1306C] data-[state=active]:text-main',
   },
]

const levels = [
   { label: 'Advanced', className: 'bg-[#8ad451]' },
   { label: 'Intermediate', className: 'bg-[#F4CE14]' },
   { label: 'Basic', className: 'bg-[#25F4EE]' },
]

const tabClass =
   'w-auto border-2 border-mainDark bg-main px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.15em] text-text shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-y-0.5 data-[state=active]:translate-x-[2px] data-[state=active]:translate-y-[2px] data-[state=active]:text-mainDark data-[state=active]:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText'

const Board = () => {
   const learningCount = [...tech, ...tools, ...devOps].filter((item) => item.onLearn).length

   return (
      <section className="flex flex-col gap-5">
         <Tabs defaultValue="tech" className="w-full">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 border-0 bg-transparent p-0 dark:bg-transparent">
               {tabItems.map((tab) => (
                  <TabsTrigger
                     key={tab.value}
                     value={tab.value}
                     className={`${tabClass} ${tab.activeClass}`}
                  >
                     {tab.label}
                     <span className="ml-2 opacity-60">{tab.items.length}</span>
                  </TabsTrigger>
               ))}
            </TabsList>

            {tabItems.map((tab) => (
               <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8"
               >
                  {tab.items.map((item) => (
                     <ItemCard
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        level={item.level}
                        onLearn={item.onLearn}
                     />
                  ))}
               </TabsContent>
            ))}
         </Tabs>

         <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 font-outfit text-xs">
               <span className="font-bold uppercase tracking-[0.15em] opacity-60">Level</span>
               {levels.map((level) => (
                  <span key={level.label} className="flex items-center gap-1.5 font-bold">
                     <span
                        className={`h-2.5 w-2.5 rounded-full border border-mainDark dark:border-darkBorder ${level.className}`}
                     />
                     {level.label}
                  </span>
               ))}
            </div>

            <PulseNotif
               title={`${learningCount} technologies in progress`}
               className="bg-[#F55353]"
            />
         </div>
      </section>
   )
}

export default Board
