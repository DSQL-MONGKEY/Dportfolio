"use client"

import { useMiniGames } from '@/stores/mini-games';
import React, { useEffect, useState } from 'react'
import QuestPickCategory from './QuestPickCategory';
import Units from './Units';
import { generalQuestions, historyQuestions, riddles, techQuestions } from '@/common/constants/questions';
import QuestHeader from './QuestHeader';

interface QuestionTypes { 
   type: string
   question: string
   choices: Array<{ 
      answer: string
      isCorrect: boolean
   }>
   clue?: string
   solution?: string
}


const QuestPlayer = () => {
   const questionCategory = ['tech', 'general', 'history', 'riddles']
   const [pickedCategory, setPickedCategory] = useState<QuestionTypes[]>([]);
   const {
      category,
      isPlaying,
      setCategory,
   } = useMiniGames();
   
   useEffect(() => {
      if(category === 'tech') {
         setPickedCategory(techQuestions)
      } else if(category === 'general') {
         setPickedCategory(generalQuestions);
      } else if(category === 'history') {
         setPickedCategory(historyQuestions);
      } else if(category === 'riddles') {
         setPickedCategory(riddles);
      }
   }, [category])

   return (
      <div className="mt-2 flex flex-col justify-between gap-5 p-3 w-full min-h-[550px] max-h-[600px] sm:min-h-[450px] bg-neutral-100 dark:bg-zinc-800 border-2 border-black shadow-light rounded-md">
         <QuestHeader />
         {!isPlaying && (
            <>
               <div className="w-full h-full flex flex-grow justify-center items-center">
                  <h2 className="text-2xl font-paytone">
                     Silakan pilih kategori pertanyaan yang kamu inginkan...
                  </h2>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                  <QuestPickCategory
                     category={category}
                     setCategory={setCategory}
                     categories={questionCategory}
                  />
               </div>
            </>
         )}
         {isPlaying && (
            <Units 
               categoryData={pickedCategory}
            />
         )}
      </div>
   )
}

export default QuestPlayer