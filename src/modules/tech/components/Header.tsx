import React from 'react'

const Header = () => {
   return (
      <div className="bg-black rounded-lg">
         <div className="flex flex-col gap-4 relative justify-center items-center p-5 bg-neutral-100 -translate-y-[8px] -translate-x-[8px] hover:translate-y-[0px] hover:translate-x-[0px] transition-all ease-in-out duration-200 rounded-lg border-2 border-black select-none">
            <div>
               <h1 className="font-paytone text-4xl sm:text-5xl md:text-6xl text-neutral-700 dark:text-neutral-900">
                  Techy and Tools
               </h1>
            </div>
            <div>
               <p className="font-outfit font-bold text-lg text-neutral-700 dark:text-neutral-500">
                  That I used to built your request
               </p>
            </div>
         </div>
      </div>
   )
}

export default Header