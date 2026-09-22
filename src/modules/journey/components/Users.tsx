import React from 'react'
import Link from 'next/link'
import { Cowork } from '@/common/types/journey'

type UsersProps = Omit<Cowork, 'image'>

const Users = ({ link, name, tag, role, opinion }: UsersProps) => {
   const hasLink = link.startsWith('http')

   return (
      <div className="flex flex-col gap-3">
         <div className="border-2 border-mainDark bg-bg p-3 dark:border-darkBorder dark:bg-darkBg">
            <div className="flex flex-wrap items-center gap-2">
               <span className="font-lexend text-base font-bold">{name}</span>
               {hasLink ? (
                  <Link
                     href={link}
                     target="_blank"
                     rel="noreferrer"
                     className="font-outfit text-xs font-bold text-[#E1306C] underline decoration-2 underline-offset-2"
                  >
                     @{tag}
                  </Link>
               ) : (
                  <span className="font-outfit text-xs font-bold opacity-60">@{tag}</span>
               )}
            </div>
            <p className="mt-1 font-outfit text-[11px] font-bold uppercase tracking-[0.1em] opacity-60">
               {role}
            </p>
         </div>

         <blockquote className="border-2 border-mainDark bg-main p-3 font-outfit text-sm italic leading-relaxed dark:border-darkBorder dark:bg-secondaryBlack">
            “{opinion}”
         </blockquote>
      </div>
   )
}

export default Users
