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
      <div></div>
   )
}

export default MobileSlideNav