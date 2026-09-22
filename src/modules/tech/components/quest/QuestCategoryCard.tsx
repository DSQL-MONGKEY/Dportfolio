"use client"

import React from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { QuestCategory, questCopy } from '@/common/constants/quest'
import { useMiniGames } from '@/stores/mini-games'

interface QuestCategoryCardProps {
   category: QuestCategory
}

const QuestCategoryCard = ({ category }: QuestCategoryCardProps) => {
   const locale = useMiniGames((state) => state.locale)
   const bestScores = useMiniGames((state) => state.bestScores)
   const startGame = useMiniGames((state) => state.startGame)
   const copy = questCopy[locale]

   const Icon = category.icon
   const best = bestScores[category.id]

   return (
      <button
         type="button"
         onClick={() => startGame(category.id, category.questions)}
         className={cn(
            'group flex flex-col border-2 border-mainDark bg-main p-4 text-left transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack',
            category.shadow
         )}
      >
         <div className="flex items-start justify-between gap-3">
            <span
               className="flex h-11 w-11 items-center justify-center border-2 border-mainDark text-mainDark dark:border-darkBorder"
               style={{ backgroundColor: category.accent }}
            >
               <Icon size={20} />
            </span>

            {best !== undefined && (
               <span className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[11px] font-bold dark:border-darkBorder dark:bg-darkBg">
                  {copy.best} {best}
               </span>
            )}
         </div>

         <span className="mt-3 font-lexend text-sm font-bold">{category.label[locale]}</span>
         <span className="mt-1 flex-1 font-outfit text-xs opacity-70">
            {category.description[locale]}
         </span>

         <span className="mt-4 flex items-center justify-between font-outfit text-[11px] font-bold">
            <span className="opacity-60">
               {category.questions.length} {copy.questionsLabel}
            </span>
            <span className="flex items-center gap-1 underline decoration-2 underline-offset-2">
               <Play size={12} fill="currentColor" /> {copy.start}
            </span>
         </span>
      </button>
   )
}

export default QuestCategoryCard
