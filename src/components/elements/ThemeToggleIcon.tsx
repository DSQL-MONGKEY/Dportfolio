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
         transition={{ duration: 0.5, delay: 0.3 }}
         className='p-1'
      >
         <button
            onClick={toggleTheme}
            className='p-2 rounded-md bg-neutral-200 dark:bg-main dark:text-black shadow-light border-2 border-black hover:scale-110 active:scale-90 transition-all duration-300'>
               {resolvedTheme === 'dark' ? <IoPartlySunnySharp /> : <IoIosCloudyNight />}
         </button>
      </motion.div>
   )
}

export default ThemeToggleIcon