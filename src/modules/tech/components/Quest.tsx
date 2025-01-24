"use client"

import React from 'react'
import QuestButton from './QuestButton'
import SectionHeading from '@/components/elements/SectionHeading'
import { MdOutlineGames } from "react-icons/md";
import SectionSubHeading from '@/components/elements/SectionSubHeading';

const Quest = () => {
   return (
      <div className='flex flex-col'>
         <SectionHeading
            title='Quest!'
            icon={<MdOutlineGames />}
         />
         <SectionSubHeading>
            <p>Do you wanna play some mini games with me?</p>
         </SectionSubHeading>
         <div className='mt-8'>
            <QuestButton
               title='Play!'
               onClick={() => {}}
            />
         </div>
      </div>
   )
}

export default Quest