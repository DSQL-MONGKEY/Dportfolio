"use client"

import React from 'react'

interface QuestButtonProps {
   title: string
   onClick: () => void
}

const QuestButton = ({ title, onClick }: QuestButtonProps) => {


   return (
      <button onClick={onClick} className='bg-black rounded-md w-52'>
         <div className='rounded-md hover:-translate-y-[5px] hover:-translate-x-[5px] active:translate-y-[0px] active:translate-x-[0px] bg-green-500 border-2 border-black p-2 transition-all duration-200'>
            <span className='font-paytone text-2xl'>
               {title}
            </span>
         </div>
      </button>
   )
}

export default QuestButton