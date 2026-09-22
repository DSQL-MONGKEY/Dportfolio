"use client"

import React, { useEffect, useRef } from 'react'
import useSound from 'use-sound'
import { cn } from '@/common/lib/utils'
import { getQuestRank, questCategories, questCopy } from '@/common/constants/quest'
import { useMiniGames } from '@/stores/mini-games'

const QuestResult = () => {
   const locale = useMiniGames((state) => state.locale)
   const category = useMiniGames((state) => state.category)
   const questions = useMiniGames((state) => state.questions)
   const score = useMiniGames((state) => state.score)
   const correctCount = useMiniGames((state) => state.correctCount)
   const bestStreak = useMiniGames((state) => state.bestStreak)
   const lives = useMiniGames((state) => state.lives)
   const newBest = useMiniGames((state) => state.newBest)
   const bestScores = useMiniGames((state) => state.bestScores)
   const startGame = useMiniGames((state) => state.startGame)
   const reset = useMiniGames((state) => state.reset)
   const recordBestScore = useMiniGames((state) => state.recordBestScore)
   const copy = questCopy[locale]

   const [playWin] = useSound('/music/sfx/win-sfx.MP3')
   const [playLose] = useSound('/music/sfx/lose-sfx.MP3')

   const total = questions.length
   const accuracy = total ? Math.round((correctCount / total) * 100) : 0
   const didWin = lives > 0 && accuracy >= 60
   const rank = getQuestRank(accuracy)
   const categoryData = questCategories.find((item) => item.id === category)
   const best = category ? bestScores[category] ?? score : score

   const playedRef = useRef(false)

   useEffect(() => {
      if (playedRef.current) return
      playedRef.current = true

      recordBestScore()
      if (didWin) {
         playWin()
      } else {
         playLose()
      }
   }, [didWin, playLose, playWin, recordBestScore])

   const stats = [
      { label: copy.accuracy, value: `${accuracy}%` },
      { label: copy.bestStreak, value: `${bestStreak}` },
      { label: copy.correct, value: `${correctCount}/${total}` },
   ]

   return (
      <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
         <span
            className={cn(
               'border-2 border-mainDark px-3 py-1 font-lexend text-xs font-black uppercase tracking-[0.15em] dark:border-darkBorder',
               didWin ? 'bg-[#8ad451] text-mainDark' : 'bg-[#F55353] text-main'
            )}
         >
            {didWin ? copy.win : copy.lose}
         </span>

         <div>
            <h3 className="font-lexend text-4xl font-black">{score}</h3>
            <p className="mt-1 font-outfit text-sm opacity-70">
               {copy.rank}: <span className="font-bold">{rank.label[locale]}</span>
            </p>
         </div>

         <div className="grid w-full max-w-md grid-cols-3 gap-3">
            {stats.map((stat) => (
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

         {newBest ? (
            <span className="border-2 border-mainDark bg-[#F4CE14] px-3 py-1 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
               {copy.newBest}
            </span>
         ) : (
            category && (
               <span className="font-outfit text-xs font-bold opacity-60">
                  {copy.best}: {best}
               </span>
            )
         )}

         <div className="flex flex-wrap justify-center gap-3">
            <button
               type="button"
               onClick={() => categoryData && startGame(categoryData.id, categoryData.questions)}
               className="border-2 border-mainDark bg-shineRed px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder"
            >
               {copy.playAgain}
            </button>

            <button
               type="button"
               onClick={reset}
               className="border-2 border-mainDark bg-main px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-text shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText"
            >
               {copy.changeCategory}
            </button>
         </div>
      </div>
   )
}

export default QuestResult
