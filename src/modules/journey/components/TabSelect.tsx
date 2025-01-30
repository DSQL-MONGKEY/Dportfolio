import React from 'react'
import { CoworksTypes } from './ItemDetails'
import Image from 'next/image'
import { FaBriefcase } from "react-icons/fa";
import { panda } from '@/assets';


interface TabSelectProps {
   handleCaseButton: () => void
   handleSelectProfile: (data: CoworksTypes) => void
   coworks: CoworksTypes[]
}

const TabSelect = ({ handleCaseButton, handleSelectProfile , coworks }: TabSelectProps) => {
   return (
      <div className='flex flex-row items-center no-scrollbar overflow-y-hidden overflow-x-scroll w-full border-2 border-black bg-neutral-100 dark:bg-zinc-900 rounded-md space-x-3 gap-2 p-2'>
         <div id='my-works' className='p-2 pr-4 border-r-2 border-black'>
            <button onClick={handleCaseButton}>
               <FaBriefcase className='text-3xl' />
            </button>
         </div>
         {coworks.map((data, idx) => (
            <button
               key={idx}
               className="flex-shrink-0"
               onClick={() => handleSelectProfile(data)}
            >
            <Image
               width={50}
               height={50}
               alt={data.name || 'picture'}
               src={data?.image == '' ? panda : data?.image}
               className="rounded-full border-2 border-black"
            />
            </button>
         ))}
      </div>
   )
}

export default TabSelect