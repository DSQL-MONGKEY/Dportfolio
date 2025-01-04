import React from 'react'

const Header = () => {
   return (
      <div className="flex flex-col gap-4  justify-center items-center p-5 bg-neutral-200 shadow-light dark:shadow-dark rounded-lg border-2 border-black">
         <div>
            <h1 className="font-paytone text-4xl sm:text-5xl md:text-6xl text-neutral-700 dark:text-neutral-900">
               Techy and tools
            </h1>
         </div>
         <div>
            <p className="font-outfit font-bold text-lg text-neutral-700 dark:text-neutral-500">
               That I used to built your request
            </p>
         </div>
      </div>
   )
}

export default Header