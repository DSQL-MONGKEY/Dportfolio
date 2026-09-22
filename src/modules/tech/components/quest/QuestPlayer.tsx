"use client"

import React from 'react'
import { questCategories, questCopy } from '@/common/constants/quest'
import { useMiniGames } from '@/stores/mini-games'
import QuestCategoryCard from './QuestCategoryCard'
import QuestHUD from './QuestHUD'
import QuestQuestion from './QuestQuestion'
import QuestResult from './QuestResult'

const QuestPlayer = () => {
   const status = useMiniGames((state) => state.status)
   const locale = useMiniGames((state) => state.locale)
   const copy = questCopy[locale]

   return (
      <div className="flex min-h-[480px] flex-col gap-5 border-2 border-mainDark bg-main p-4 shadow-[4px_4px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack sm:min-h-[420px] md:p-5">
         {status === 'idle' && (
            <>
               <p className="text-center font-lexend text-sm font-black uppercase tracking-[0.15em] opacity-70">
                  {copy.pickCategory}
               </p>

               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {questCategories.map((category) => (
                     <QuestCategoryCard key={category.id} category={category} />
                  ))}
               </div>
            </>
         )}

         {status === 'playing' && (
            <>
               <QuestHUD />
               <QuestQuestion />
            </>
         )}

         {status === 'finished' && <QuestResult />}
      </div>
   )
}

export default QuestPlayer
