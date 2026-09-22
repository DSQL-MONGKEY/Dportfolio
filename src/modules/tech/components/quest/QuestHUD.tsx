"use client"

import React from 'react'
import { Heart } from 'lucide-react'
import NumberTicker from '@/components/ui/NumberTicker'
import { Progress } from '@/components/ui/Progress'
import { cn } from '@/common/lib/utils'
import { questCopy } from '@/common/constants/quest'
import { MAX_LIVES, useMiniGames } from '@/stores/mini-games'

const QuestHUD = () => {
   const locale = useMiniGames((state) => state.locale)
   const index = useMiniGames((state) => state.index)
   const questions = useMiniGames((state) => state.questions)
   const score = useMiniGames((state) => state.score)
   const streak = useMiniGames((state) => state.streak)
   const lives = useMiniGames((state) => state.lives)
   const isLocked = useMiniGames((state) => state.isLocked)
   const copy = questCopy[locale]

   const answered = index + (isLocked ? 1 : 0)
   const progress = questions.length ? (answered / questions.length) * 100 : 0

   return (
      <div className="flex flex-col gap-3">
         <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-lexend text-xs font-black uppercase tracking-[0.15em]">
               {copy.question} {Math.min(index + 1, questions.length)}/{questions.length}
            </span>

            <div className="flex items-center gap-1">
               {Array.from({ length: MAX_LIVES }).map((_, heartIndex) => (
                  <Heart
                     key={heartIndex}
                     size={16}
                     fill="currentColor"
                     className={cn(
                        heartIndex < lives
                           ? 'text-[#F55353]'
                           : 'text-mainDark/20 dark:text-darkText/20'
                     )}
                  />
               ))}
            </div>
         </div>

         <Progress value={progress} className="h-3 rounded-none" />

         <div className="flex flex-wrap items-center gap-3 font-outfit text-xs font-bold">
            <span className="border-2 border-mainDark bg-bg px-2 py-1 dark:border-darkBorder dark:bg-darkBg">
               {copy.score}:{' '}
               <NumberTicker value={score} className="text-inherit dark:text-inherit" />
            </span>
            <span className="border-2 border-mainDark bg-bg px-2 py-1 dark:border-darkBorder dark:bg-darkBg">
               {copy.streak}: {streak}
            </span>
         </div>
      </div>
   )
}

export default QuestHUD
