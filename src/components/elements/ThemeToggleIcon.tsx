"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion';
import { IoIosCloudyNight } from "react-icons/io";
import { IoPartlySunnySharp } from "react-icons/io5";
import { Button } from '../ui/Button';

const ThemeToggleIcon = () => {
   const { setTheme, resolvedTheme } = useTheme();

   const toggleTheme = () => {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
   }

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5, delay: 0.5 }}
         className='p-1'
      >
         <Button 
            variant={'default'}
            onClick={toggleTheme}
         >
            {resolvedTheme === 'dark' ? <IoPartlySunnySharp /> : <IoIosCloudyNight />}
         </Button>
      </motion.div>
   )
}

export default ThemeToggleIcon