"use client"

import { useMiniGames } from '@/stores/mini-games';
import React, { useState } from 'react'
import useSound from 'use-sound';

interface ChoicesTypes {
   answer: string
   isCorrect: boolean
}

export interface UnitsProps  {
   categoryData: Array<{
      type: string
      question: string
      choices: ChoicesTypes[],
      clue?: string
      solution?: string
   }>
}

const Units = ({ categoryData }: UnitsProps) => {
   const [shuffledIndexes, setShuffledIndexes] = useState(() => categoryData.map((_, idx) => idx).sort(() => Math.random() - 0.5));
   const currentIndex = shuffledIndexes[0];
   const [win] = useSound('/music/sfx/win-sfx.mp3');
   const [lose] = useSound('/music/sfx/lose-sfx.mp3');
   const [correct] = useSound('/music/sfx/correct-sfx.mp3');
   const [uncorrect] = useSound('/music/sfx/uncorrect-sfx.mp3');
   const {
      currentScore,
      setCurrentScore,
      streaksScore,
      setStreaksScore
   } = useMiniGames();

   const correctAnswer = () => {
      correct();
      setCurrentScore(currentScore + 10);
      setStreaksScore(streaksScore + 1)
   }
   const uncorrectAnswer = () => {
      uncorrect();
      setStreaksScore(0);
   }

   const handleAnswer = (isCorrect: boolean) => {
      
      setShuffledIndexes(prev => prev.slice(1));
      return isCorrect ? correctAnswer() : uncorrectAnswer();
   }

   const handleWinning = () => {
      win();
   }
   const handleLosing = () => {
      lose();
   }

   const currentQuestion = categoryData[currentIndex];

   if(shuffledIndexes.length === 0) {
      let finalMessage= '';
      
      if(currentScore >=75) {
         handleWinning();
         finalMessage = "Selamat! Kamu berhasil memenangkan permainan ini!";
      } else {
         handleLosing();
         finalMessage = "Kamu gagal memenangkan permainan ini, coba lagi yaa!";
      }
      return (
         <div className="w-full h-full flex flex-col flex-grow justify-center items-center">
               <span className="text-blue-500 text-center text-xl sm:text-2xl font-paytone">{finalMessage}</span>
            <h2 className="text-sm sm:text-lg font-paytone text-center">
               Terima kasih telah bermain.
            </h2>
         </div>
      )
   }

   

   return (
      <>
         <div className="w-full h-full flex flex-grow justify-center items-center">
            <h2 className="text-2xl font-paytone">
               {currentQuestion.question}
            </h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
            {currentQuestion.choices.map((data, idx) => (
               <div key={idx} className="group bg-black rounded-md h-16 sm:h-24">
               <button
                  id='button-answer'
                  onClick={() => handleAnswer(data.isCorrect)}
                  className={`bg-slate-200 h-full border-2 w-full border-black rounded-md group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]
                  group-active:-translate-x-[0px] group-active:-translate-y-[0px]
                  transition-all duration-100`}
               >
                  <span className={`text-neutral-800 text-xl sm:text-2xl font-paytone capitalize `}>
                     {data.answer}
                  </span>
               </button>
            </div>
            ))}
         </div>
      </>
   )
}

// ${category == item ? 'bg-green-500 dark:bg-[#F5004F]' : 'bg-slate-200 dark:bg-[#FFC700]'}
// ${category == item ? 'text-white': 'text-neutral-800'} 

export default Units