"use client"

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const LinkButtonIcon = ({link, icon}: {link: string, icon: React.ReactNode}) => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className='bg-black rounded-md group'
      >
         <Link 
            href={link} 
            target='_blank' 
            rel='noopener noreferrer'
         >
            <button
               className='p-2 rounded-md group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] group-active:translate-x-[0px] group-active:translate-y-[0px] bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 border-2 border-black transition-all duration-100'>
               
                  {icon}
            </button>
         </Link>
      </motion.div>
   )
}

export default LinkButtonIcon;