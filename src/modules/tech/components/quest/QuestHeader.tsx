"use client"

import NumberTicker from '@/components/ui/NumberTicker';
import { useMiniGames } from '@/stores/mini-games';
import React from 'react'

const QuestHeader = () => {
   const {
      currentScore,
      streaksScore,
   } = useMiniGames();

 

   return (
      <div className='flex flex-row justify-between items-center'>
         <div className='flex flex-row items-center gap-2 sm:gap-3'>
            <div className='flex flex-row items-center gap-1'>
               <span className='text-lg sm:text-xl'>💪</span>
               <span className='text-md sm:text-xl font-paytone'>
               {currentScore > 0 ? (
                  <NumberTicker value={currentScore} />
               ) : currentScore}
               </span>
            </div>
            <div className='flex flex-row items-center gap-1'>
               <span className="text-lg sm:text-xl">🔥</span>
               <span className='text-md sm:text-xl font-paytone'>
               {streaksScore > 0 ? (
                  <NumberTicker value={streaksScore} />
               ) : streaksScore}
               </span>
            </div>
            
         </div>
         <div className="flex flex-row items-center gap-2 sm:gap-3">
            <div className="flex flex-row items-center gap-1">
               <span className='text-md sm:text-xl font-paytone'>
                  5
               </span>
               <span className="text-lg sm:text-xl">💡</span>
            </div>
            <div className="flex flex-row items-center gap-1">
               <span className='text-md sm:text-xl font-paytone'>
                  5
               </span>
               <span className="text-lg sm:text-xl">❤️</span>
            </div>
         </div>
      </div>
   )
}

export default QuestHeader