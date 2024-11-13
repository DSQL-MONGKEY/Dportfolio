"use client"

import React, { useEffect } from 'react'
import ProfileHeader from './ProfileHeader'
import useIsMobile from '@/hooks/useIsMobile'
import { useMenu } from '@/stores/menu'
import clsx from 'clsx'
import ThemeToggleIcon from '@/components/elements/ThemeToggleIcon'

const Profile = () => {
   const isMobile = useIsMobile();
   const imageSize = isMobile ? 40 : 100;
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

   },[isOpen])

   return (
      <div className={clsx(
         'fixed z-20 w-full bg-white p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-dark lg:relative lg:border-none lg:!bg-transparent lg:p-0 xl:shadow-none',
         isOpen && 'pb-0'
      )}>
         <div className="flex flex-col justify-center">
            <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
            <div className='text-center'>
               <h2 className="">Dimas Prasetyo</h2>
               <p>Software Engineer</p>
            </div>
            {isMobile && (
               <div>
                  <ThemeToggleIcon />
               </div>
            )}
         </div>
      </div>
   )
}

export default Profile