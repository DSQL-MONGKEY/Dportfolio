"use client"

import { useMiniGames } from '@/stores/mini-games';
import React, { useState } from 'react'
import QuestPickCategory from './QuestPickCategory';

const QuestPlayer = () => {
   const questionCategory = ['tech', 'general', 'history', 'riddles']
   const [category, setCategory] = useState<string>('');
   const {
      isPlaying,
   } = useMiniGames();
   

   return (
      <div className="mt-2 flex flex-col justify-between p-3 w-full h-[450px] bg-neutral-100 dark:bg-zinc-800 border-2 border-black shadow-light rounded-md">
         <div className="">
            <h2 className="text-2xl font-paytone">
               Silakan pilih kategori pertanyaan yang kamu inginkan...
            </h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
            {!isPlaying && (
               <QuestPickCategory
                  category={category}
                  setCategory={setCategory}
                  categories={questionCategory}
               />
            )}
         </div>
      </div>
   )
}

export default QuestPlayer