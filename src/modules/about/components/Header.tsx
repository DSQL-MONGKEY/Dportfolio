import React from 'react'
import { MdRoundaboutRight } from 'react-icons/md'

const Header = () => {
   return (
      <div className="mb-5">
         <div className="flex gap-1 space-y-2">
            <MdRoundaboutRight className="h-10 w-10"/>
            <h2 className="text-3xl font-lexend text-neutral-700 dark:text-slate-300">About</h2>
         </div>
         <p className="font-outfit text-md text-neutral-900 dark:text-slate-200 ">
            A Little Piece of my life
         </p>
      </div>
   )
}

export default Header