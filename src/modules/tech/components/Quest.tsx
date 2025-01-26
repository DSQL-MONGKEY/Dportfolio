"use client"

import React from 'react'
import QuestButton from './QuestButton'
import SectionHeading from '@/components/elements/SectionHeading'
import { MdOutlineGames } from "react-icons/md";
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import QuestPlayer from './QuestPlayer';

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
         <QuestPlayer />
         <div className='flex mt-8 w-full justify-center sm:justify-end'>
            <QuestButton
               title='Play!'
               onClick={() => {}}
            />
         </div>
      </div>
   )
}

export default Quest