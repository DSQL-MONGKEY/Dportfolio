"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion';
import { IoIosCloudyNight } from "react-icons/io";
import { IoPartlySunnySharp } from "react-icons/io5";

const ThemeToggleIcon = () => {
   const { setTheme, resolvedTheme } = useTheme();

   const toggleTheme = () => {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
   }

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className='bg-black rounded-md group'
      >
         <button
            onClick={toggleTheme}
            className='p-2 rounded-md group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] group-active:translate-x-[0px] group-active:translate-y-[0px] bg-neutral-900 text-neutral-100 dark:bg-main dark:text-neutral-900 border-2 border-black transition-all duration-100'>
               {resolvedTheme === 'dark' ? <IoPartlySunnySharp /> : <IoIosCloudyNight />}
         </button>
      </motion.div>
   )
}

export default ThemeToggleIcon