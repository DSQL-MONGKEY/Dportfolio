import { dimas } from '@/assets'
import ThemeToggleIcon from '@/components/elements/ThemeToggleIcon'
import clsx from 'clsx'
import Image from 'next/image'
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

            <div className="z-10 -mt-11 rounded-full border-2 border-slate-500 dark:border-darkBorder shadow-light dark:shadow-dark">
               <Image
                  src={dimas}
                  alt="profile"
                  width={expandMenu ? 80 : imageSize * 0.9}
                  height={expandMenu ? 80 : imageSize * 0.9}
                  className="rounded-full"
               />
            </div>
         </div>
      </div>
   )
}

export default ProfileHeader