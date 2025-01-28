"use client"

import React from 'react'
import QuestButton from './quest/QuestButton'
import SectionHeading from '@/components/elements/SectionHeading'
import { MdOutlineGames } from "react-icons/md";
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import QuestPlayer from './quest/QuestPlayer';
import { useMiniGames } from '@/stores/mini-games';

const Quest = () => {
   const {
      isPlaying,
      setIsPlaying
   } = useMiniGames();

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
               title={isPlaying ? 'Stop?' : 'Play!'}
               onClick={() => setIsPlaying(!isPlaying)}
            />
         </div>
      </div>
   )
}

export default Quest