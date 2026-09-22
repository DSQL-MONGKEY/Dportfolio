"use client"

import React, { useEffect, useState } from 'react'
import { Lightbulb } from 'lucide-react'
import useSound from 'use-sound'
import { cn } from '@/common/lib/utils'
import { questCopy } from '@/common/constants/quest'
import { useMiniGames } from '@/stores/mini-games'

const QuestQuestion = () => {
   const locale = useMiniGames((state) => state.locale)
   const questions = useMiniGames((state) => state.questions)
   const index = useMiniGames((state) => state.index)
   const isLocked = useMiniGames((state) => state.isLocked)
   const selectedChoice = useMiniGames((state) => state.selectedChoice)
   const hints = useMiniGames((state) => state.hints)
   const answer = useMiniGames((state) => state.answer)
   const next = useMiniGames((state) => state.next)
   const consumeHint = useMiniGames((state) => state.useHint)
   const copy = questCopy[locale]

   const question = questions[index]
   const [hiddenChoices, setHiddenChoices] = useState<number[]>([])
   const [revealedClue, setRevealedClue] = useState(false)

   const [playCorrect] = useSound('/music/sfx/correct-sfx.MP3')
   const [playWrong] = useSound('/music/sfx/uncorrect-sfx.MP3')
   const [playClick] = useSound('/music/sfx/click-sfx.MP3')

   useEffect(() => {
      setHiddenChoices([])
      setRevealedClue(false)
   }, [index])

   useEffect(() => {
      if (!isLocked || !question) return

      const isCorrect = selectedChoice !== null && question.choices[selectedChoice]?.isCorrect
      if (isCorrect) {
         playCorrect()
      } else {
         playWrong()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLocked])

   if (!question) return null

   const correctIndex = question.choices.findIndex((choice) => choice.isCorrect)
   const selectedIsCorrect = selectedChoice !== null && question.choices[selectedChoice]?.isCorrect

   const handleHint = () => {
      if (hints <= 0 || isLocked) return

      playClick()
      consumeHint()

      if (question.clue) {
         setRevealedClue(true)
         return
      }

      const wrongIndexes = question.choices
         .map((choice, choiceIndex) => (choice.isCorrect ? -1 : choiceIndex))
         .filter((choiceIndex) => choiceIndex >= 0)

      setHiddenChoices(wrongIndexes.sort(() => Math.random() - 0.5).slice(0, 2))
   }

   return (
      <div className="flex flex-1 flex-col gap-5">
         <div className="flex flex-1 items-center justify-center">
            <h3 className="text-center font-lexend text-lg font-bold leading-snug md:text-xl">
               {question.question[locale]}
            </h3>
         </div>

         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {question.choices.map((choice, choiceIndex) => {
               const isCorrectChoice = choiceIndex === correctIndex
               const isSelected = choiceIndex === selectedChoice
               const isHidden = hiddenChoices.includes(choiceIndex)

               return (
                  <button
                     key={choiceIndex}
                     type="button"
                     disabled={isLocked || isHidden}
                     onClick={() => answer(choiceIndex)}
                     className={cn(
                        'flex min-h-[64px] items-center justify-center border-2 border-mainDark bg-bg px-4 py-3 text-center font-outfit text-sm font-bold text-text shadow-[3px_3px_0px_0px_#000] transition-all dark:border-darkBorder dark:bg-darkBg dark:text-darkText',
                        !isLocked && !isHidden && 'hover:-translate-y-1',
                        isHidden && 'pointer-events-none line-through opacity-30',
                        isLocked && isCorrectChoice && 'bg-[#8ad451] text-mainDark dark:bg-[#8ad451] dark:text-mainDark',
                        isLocked && isSelected && !isCorrectChoice && 'animate-shake bg-[#F55353] text-main',
                        isLocked && !isSelected && !isCorrectChoice && 'opacity-50'
                     )}
                  >
                     {choice.answer[locale]}
                  </button>
               )
            })}
         </div>

         {isLocked && (
            <div className="border-2 border-mainDark bg-bg p-3 font-outfit text-xs dark:border-darkBorder dark:bg-darkBg">
               <span
                  className={cn(
                     'font-lexend text-xs font-black uppercase tracking-[0.15em]',
                     selectedIsCorrect ? 'text-[#3DA35D]' : 'text-[#F55353]'
                  )}
               >
                  {selectedIsCorrect ? copy.correct : copy.wrong}
               </span>

               {(question.solution || revealedClue) && (
                  <p className="mt-1 opacity-80">
                     {question.solution
                        ? `${copy.solution}: ${question.solution[locale]}`
                        : question.clue?.[locale]}
                  </p>
               )}
            </div>
         )}

         <div className="flex flex-wrap items-center justify-between gap-3">
            <button
               type="button"
               onClick={handleHint}
               disabled={hints <= 0 || isLocked}
               className={cn(
                  'flex items-center gap-2 border-2 border-mainDark bg-[#F4CE14] px-3 py-2 font-outfit text-xs font-bold text-mainDark shadow-[3px_3px_0px_0px_#000] transition-all dark:border-darkBorder',
                  hints <= 0 || isLocked
                     ? 'cursor-not-allowed opacity-40'
                     : 'hover:-translate-y-0.5'
               )}
            >
               <Lightbulb size={14} />
               {hints > 0 ? `${copy.hint} (${hints})` : copy.noHints}
            </button>

            {isLocked && (
               <button
                  type="button"
                  onClick={next}
                  className="border-2 border-mainDark bg-mainDark px-5 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-main shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-y-0.5 dark:border-darkBorder dark:bg-darkText dark:text-mainDark"
               >
                  {copy.next} →
               </button>
            )}
         </div>
      </div>
   )
}

export default QuestQuestion
