import React from 'react'
import Image from 'next/image'
import { FaBriefcase } from 'react-icons/fa'
import { panda } from '@/assets'
import { cn } from '@/common/lib/utils'
import { Cowork } from '@/common/types/journey'

interface TabSelectProps {
   handleCaseButton: () => void
   handleSelectProfile: (data: Cowork) => void
   coworks: Cowork[]
   isSelected: boolean
}

const TabSelect = ({ handleCaseButton, handleSelectProfile, coworks, isSelected }: TabSelectProps) => {
   return (
      <div className="flex w-full items-center gap-2 overflow-x-auto border-2 border-mainDark bg-bg p-2 dark:border-darkBorder dark:bg-darkBg">
         <button
            type="button"
            onClick={handleCaseButton}
            aria-label="Show role details"
            className={cn(
               'flex h-11 w-11 shrink-0 items-center justify-center border-2 border-mainDark shadow-[2px_2px_0px_0px_#000] transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
               isSelected
                  ? 'bg-[#F4CE14] text-mainDark'
                  : 'bg-main text-text dark:bg-secondaryBlack dark:text-darkText'
            )}
         >
            <FaBriefcase className="text-lg" />
         </button>

         <span className="h-8 w-0.5 shrink-0 bg-mainDark dark:bg-darkBorder" />

         {coworks.map((data, index) => (
            <button
               key={index}
               type="button"
               onClick={() => handleSelectProfile(data)}
               className="shrink-0 transition-transform hover:-translate-y-0.5"
            >
               <Image
                  width={44}
                  height={44}
                  alt={data.name || 'picture'}
                  src={data?.image === '' ? panda : data?.image}
                  className="h-11 w-11 rounded-full border-2 border-mainDark object-cover dark:border-darkBorder"
               />
            </button>
         ))}
      </div>
   )
}

export default TabSelect
