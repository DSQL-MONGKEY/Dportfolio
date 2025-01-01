"use client"

import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import useIsMobile from '@/hooks/useIsMobile';
import { useMenu } from '@/stores/menu';
import Image from 'next/image';
import { dimas } from '@/assets';
import ThemeToggleIcon from '../elements/ThemeToggleIcon';
import ExpandButton from './sidebar/ExpandButton';
import MobileMenu from './sidebar/MobileMenu';
import Link from 'next/link';


const MobileSlideNav = () => {
   const isMobile = useIsMobile();
   const { isOpen, toggleMenu } = useMenu();

   useEffect(() => {
      if(isOpen) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'auto'
      }

      return () => {
         document.body.style.overflow = 'auto'
      }
   }, [isOpen]);

   return (
      <div className="flex flex-col rounded-b-md px-4 py-4 shadow-sm lg:hidden z-50">
         <div className="flex w-full items-center justify-between">
            <div className="flex space-x-2 items-center">
               <Image
                  height={40}
                  width={40}
                  src={dimas}
                  alt='Profile Photo'
                  className="rounded-full"
               />
               <Link href={'/'}>
                  <h2 className='font-poppins text-lg'>
                     Dimas Prasetyo 🍉
                  </h2>
               </Link>
            </div>

            <div className='flex space-x-2 items-center'>
               <ThemeToggleIcon />
               <ExpandButton isExpanded={isOpen} setIsExpanded={toggleMenu} />
            </div>
         </div>
         {isMobile && (
            <AnimatePresence>
               <MobileMenu isOpen={isOpen} /> 
            </AnimatePresence>
         )}
      </div>
   )
}

export default MobileSlideNav