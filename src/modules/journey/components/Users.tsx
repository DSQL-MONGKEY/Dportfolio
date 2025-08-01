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
      <div id='user-profile' className='flex flex-row w-full md:bg-neutral-100 md:dark:bg-zinc-900 lg:rounded-md lg:border-2 lg:border-black lg:p-2 lg:shadow-light'>
         <div className='flex flex-col'>
            <Link href={link!} className='space-x-2'>
               <span className='font-poppins text-lg'>
                  {name}
               </span>
               <span className='font-poppins text-zinc-500'>
                  @{tag}
               </span>
            </Link>
            <div className='font-outfit'>
               <span>{role}</span>
            </div>
         </div>
      </div>
      <div className='flex justify-center'>
         <p>
            {opinion}
         </p>
      </div>
   </>
)
}

export default Users