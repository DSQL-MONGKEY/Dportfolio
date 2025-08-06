import React from 'react'
import { FaWalking } from 'react-icons/fa'
import { TbHandClick } from 'react-icons/tb'

const Header = () => {
   return (
      <div className="mb-5">
         <div className="flex gap-1 space-y-2">
            <FaWalking className="h-10 w-10"/>
            <h2 className="text-3xl font-lexend text-neutral-900 dark:text-slate-200">Journey</h2>
         </div>
         <p className="font-outfit text-md text-neutral-700 dark:text-slate-300">
            <span className='bg-cyan-300 dark:bg-cyan-800'>
               The Journey that Shaped Who I Am Today
            </span>
            , each step below is not just a career change - it&apos;s a trail of courage, self-discovery, and a willingness to grow from ground zero. This is not just a timeline, but a reflection on the courage to metamorphose.
         </p>
         <span className='flex w-full font-outfit justify-end items-center'>
            <TbHandClick />
            click&apos;it for details
         </span>
      </div>
   )
}

export default Header