import { dimas } from '@/assets'
import ThemeToggleIcon from '@/components/elements/ThemeToggleIcon'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface ProfileHeaderProps {
   expandMenu: boolean,
   imageSize: number
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
   return (
      <div className={clsx(
         'flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5', expandMenu && 'flex-col !items-start'
      )}>
         <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex">

            {/* backdrop image */}
            <div className="h-32 w-full overflow-hidden  bg-[#FBFF00] dark:bg-[#FF6363] rounded-lg border-2 border-black">
               <div className="w-full bottom-0 h-[200px] bg-[#B983FF] dark:bg-main rotate-45 translate-y-[17px] border-2 border-black"></div>
            </div>

            {/* theme toggle icon */}
            <div className="absolute -right-1 z-10 rounded-xl py-2 pr-2">
               <ThemeToggleIcon />
            </div>

            <div className="group z-10 -mt-16 rounded-full border-2 border-black dark:border-[#1D2B53]  transition-all ease-in-out duration-200 bg-black">
               <Image
                  src={dimas}
                  alt="profile"
                  width={expandMenu ? 100 : imageSize * 0.9}
                  height={expandMenu ? 100 : imageSize * 0.9}
                  className="rounded-full"
               />
            </div>

            <div className='text-center mt-1'>
                  <Link 
                     href={'/'}
                     className="text-xl font-poppins font-sembibold">
                     Dimas Prasetyo
                  </Link>
            </div>
            <Link 
               href={'https://www.instagram.com/dimpfe'}
               target='_blank'
               rel='noopener noreferrer'
            >
               @dimpfe
            </Link>
         </div>
      </div>
   )
}

export default ProfileHeader