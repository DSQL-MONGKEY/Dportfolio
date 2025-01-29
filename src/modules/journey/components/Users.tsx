import React from 'react'
import Link from 'next/link';

interface UsersProps {
   link: string
   name: string
   tag: string
   role: string
   opinion: string
}

const Users = ({ link, name, tag, role, opinion }: UsersProps) => {
   return (
   <>
      <div id='user-profile' className='flex flex-row w-full'>
         <div className='flex flex-col'>
            <Link href={link!} className='space-x-2'>
               <span className='font-poppins text-lg'>
                  {name}
               </span>
               <span className='font-poppins'>
                  @{tag}
               </span>
            </Link>
            <div className='font-outfit'>
               <span>{role}</span>
            </div>
         </div>
      </div>
      <div>
         {opinion}
      </div>
   </>
)
}

export default Users