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
         'flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5', expandMenu && 'flex-col !items-start bg-blue-200'
      )}>
         <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex  ">

            {/* backdrop image */}
            <div className="h-24 w-full overflow-hidden rounded-lg dark:brightness-50">

            </div>

            {/* theme toggle icon */}
            <div className="absolute -right-1 botton-[55px] z-10 rounded-xl py-2 pr-2">
               <ThemeToggleIcon />
            </div>

            <div className="z-10 -mt-11 rounded-full border-4 border-slate-500 dark:border-[#1D2B53] lg:hover:scale-105 transition-all ease-in-out duration-200">
               <Image
                  src={dimas}
                  alt="profile"
                  width={expandMenu ? 80 : imageSize * 0.9}
                  height={expandMenu ? 80 : imageSize * 0.9}
                  className="rounded-full"
               />
            </div>

            <div className='text-center mt-1'>
                  <Link href={'/'} className="text-xl font-poppins font-sembibold">
                     Dimas Prasetyo
                  </Link>
            </div>
            <Link href={'https://www.instagram.com/dimpfe'}>
               @dimpfe
            </Link>
         </div>
      </div>
   )
}

export default ProfileHeader