import Link from 'next/link';
import React from 'react'
import { VscRepoClone } from "react-icons/vsc";

type techStack = {
   tags: string;
   color: string;
}

interface ItemProjectProps {
   className?: string;
   title: string;
   techStack: techStack[];
   desc: string;
   link: string;
   isFeatured: boolean
}

const ItemProject = ({ className='', title, techStack, desc, link, isFeatured }: ItemProjectProps) => {
   return (
      <div className={`flex flex-col gap-2 ${className}`}>
         <div className='flex justify-between items-center border-b-2 border-opacity-50 border-b-neutral-700 dark:border-b-slate-300 pb-4'>
            <h3 className='font-paytone text-3xl text-zinc-700 dark:text-zinc-300'>
               {title}
            </h3>
            {isFeatured && (
               <div>Featured</div>
            )}
         </div>

         <div>
            <p className='font-outfit text-neutral-700 dark:text-slate-300'>
               {desc}
            </p>
         </div>

         <div className='flex gap-2 flex-wrap'>
            {techStack.map((item, idx) => (
               <div key={idx} className={`font-poppins bg-slate-200  rounded-full px-2 py-1 border-2 border-b-4 border-black`}>
                  <span className={`text-neutral-700 text-sm`}>
                     {item.tags}
                  </span>
               </div>
            ))}
         </div>
         
         <Link
            href={link}
            target='_blank'
            className='flex items-center gap-2'
         >
            <span className='font-outfit text-lg text-neutral-500 dark:text-lightGreen'>
               Visit project repository
            </span>
            <VscRepoClone className='h-8 w-8' />
         </Link>
      </div>
   )
}

export default ItemProject