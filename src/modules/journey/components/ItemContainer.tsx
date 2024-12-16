import { cn } from '@/common/lib/utils';
import React from 'react'
import { ImFlag } from "react-icons/im";

interface ItemContainerProps {
   title: string
   role: string
   date: string
   className?: string
}

const ItemContainer = ({ className = '', title, role, date, }: ItemContainerProps) => {
   
   return (
      <div  className={`group flex flex-row items-center gap-5 transition-all ease-in-out ${className}`}>
         <div className='flex justify-center items-center  bg-slate-200 dark:bg-green-500 dark:group-hover:bg-sky-500  group-hover:bg-sky-500 group-hover:text-white duration-300 border-l-4 border-t-4 border-r-8 border-b-8 shadow-light dark:shadow-dark border-black p-6 md:p-14 rounded-xl group-hover:scale-105'>
            <ImFlag className='text-xl md:text-5xl' />
         </div>

         <div className={`space-y-2 px-2 py-3 ${className}`}>
            <h3 className='text-xl md:text-3xl font-paytone'>{title}</h3>
            <p className='font-outfit text-sm md:text-xl'>{role}</p>
            <span className='font-outfit text-sm md:text-md'>{date}</span>
         </div>

         <svg 
            fill='none'
            xmlns="http://www.w3.org/2000/svg"
            className={cn('pointer-events-none absolute transform-gpu stroke-2')}
         >
            <path
               d=''
            />
         </svg>
      </div>
   )
}

export default ItemContainer;