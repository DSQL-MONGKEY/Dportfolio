"use client"

import React from 'react'
import IllustrationContainer  from './IllustrationContainer'

import { motion } from "framer-motion";

const WebIllustration = () => {
   
   return (
      <>
         <IllustrationContainer>
            {/* <div>
               <motion.div
                  className="mb-2 border border-neutral-300 dark:border-neutral-700"
                  initial={{ 
                     borderRadius: '50%',
                     width: '20px',
                     height: '20px'
                  }}
                  animate={{ 
                     borderRadius: ['50%', '50%', '4px', '4px', '4px', '50%'],
                     width: ['20px', '20px', '40px', '40px', '40px', '20px'],
                     height: ['20px', '20px', '40px', '40px', '40px', '20px']
                  }}
                  transition={{ 
                     duration: 10,
                     repeat: Infinity,
                     times: [0, 0.3, 0.5, 0.8, 1],
                     ease: 'easeInOut'
                  }}
               >
               </motion.div>
               <div className="flex flex-col gap-1">
                  <div className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <div className="h-1 w-4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                  <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                  <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
               </div>
            </div> */}

            <div className='space-y-1 h-full'>
               <div className='flex top-6 gap-1'>
                  <div className='w-5 h-1 bg-neutral-700 rounded-lg'></div>
                  <div className='w-36 h-1 bg-neutral-700 rounded-lg'></div>
               </div>
               <div className='flex flex-col gap-1'>
                  <div className='w-20 h-10 bg-neutral-700 rounded-lg'></div>  
                  <div className='w-20 h-10 bg-neutral-700 rounded-lg'></div>
                  <div className='w-20 h-10 bg-neutral-700 rounded-lg'></div>
               </div>  
            </div>
         </IllustrationContainer>
         
      </>
   )
}

export default WebIllustration