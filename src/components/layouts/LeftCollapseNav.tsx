import { dimas } from '@/assets';
import { navLinks } from '@/common/constants/constants';
import Image from 'next/image';
import React, { useState } from 'react'
import MenuItem from './sidebar/MenuItem';

const LeftCollapseNav = () => {
   const [isHover, setIsHover] = useState(false);

   return (
      <div
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
         className="fixed bottom-0 left-0 z-30 hidden w-16 flex-col items-center justify-between overflow-hidden rounded-r-2xl px-2 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-neutral-800 lg:flex"
      >
         <div className={`flex h-64 ${isHover ? 'items-start' : 'items-center'}`}>
            {isHover ?(
               <p>COBA DULU</p>
            ) : (
               <div className='flex flex-col items-center gap-8'>
                  <div className='z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800'>
                     <Image src={dimas} alt="profile" width={50} height={50} className="rounded-full" />
                  </div>
               </div>
            )}
         </div>
         <nav className="mb-6 mt-4 flex flex-col gap-3 border-t border-neutral-300 pt-4">
            {navLinks.map((item, index) => (
               <MenuItem key={index} {...item} isHover={isHover} />
            ))}
         </nav>
      </div>
   )
}

export default LeftCollapseNav