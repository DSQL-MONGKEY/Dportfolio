import React from 'react'
import { FaWalking } from 'react-icons/fa'

const Header = () => {
   return (
      <div className="mb-5">
         <div className="flex gap-1 space-y-2">
            <FaWalking className="h-10 w-10"/>
            <h2 className="text-3xl font-lexend text-neutral-900 dark:text-slate-200">Journey</h2>
         </div>
         <p className="font-outfit text-md text-neutral-900 dark:text-slate-200 ">
            <span className='bg-slate-400 dark:bg-cyan-500'>
               The Journey that Shaped Who I Am Today
            </span>
            , each step below is not just a career change - it&apos;s a trail of courage, self-discovery, and a willingness to grow from ground zero. This is not just a timeline, but a reflection on the courage to metamorphose.
         </p>
      </div>
   )
}

export default Header