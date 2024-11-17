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
      <motion.button
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5, delay: 0.5 }}
         onClick={toggleTheme}
         className={'rounded-xl bg-white border-white p-2 dark:bg-neutral-800  shadow-light dark:shadow-dark'}
      >
         {resolvedTheme === 'dark' ? <IoPartlySunnySharp /> : <IoIosCloudyNight />}
      </motion.button>
   )
}

export default ThemeToggleIcon