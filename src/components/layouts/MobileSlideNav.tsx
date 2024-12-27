"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Menu from './sidebar/Menu';
import { navLinks } from '@/common/constants/constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useMenu } from '@/stores/menu';


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
      <div className="flex flex-col rounde-b-md px-4 py-4 shadow-sm lg:hideen">
         <div className="flex w-full items-center justify-between">
            <div className="flex space-x-2">
               
            </div>
         </div>

      </div>
   )
}

export default MobileSlideNav