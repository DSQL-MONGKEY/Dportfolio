import React from 'react'

interface QuestPickCategoryProps {
   category: string
   setCategory: (category: string) => void
   categories: string[]
}

const QuestPickCategory = ({ category, setCategory, categories }: QuestPickCategoryProps) => {
   return (
      <>
         {categories.map((item, index) => (
            <div key={index} className="group bg-black rounded-md h-24">
               <button 
                  onClick={() => setCategory(item)}
                  className={`${category == item ? 'bg-green-500' : 'bg-slate-200'} h-full border-2 w-full border-black rounded-md group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]
                  group-active:-translate-x-[0px] group-active:-translate-y-[0px]
                  
                  transition-all duration-100`}
               >
                  <span className="text-xl sm:text-2xl font-paytone text-neutral-800 capitalize dark:text-neutral-100">
                     {item}
                  </span>
               </button>
            </div>
         ))}
      </>
   )
}

export default QuestPickCategory