"use client"

import React, { useState } from 'react'
import AudioPlayer from './audio-player/AudioPlayer';
import useIsMobile from '@/hooks/useIsMobile';

const MusicBox = () => {
   const [isHover, setIsHover] = useState(false);
   const isMobile = useIsMobile();

   return (
      <div
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
         className="fixed mt-5 top-0 right-0 z-30 hidden bg-[#EFECEC] dark:bg-calmBlue w-16 flex-col items-center justify-between overflow-hidden rounded-l-md border-l-4 border-b-8 border-t-2 border-black px-4 py-4 transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 lg:flex"
      >
         <div className={`flex h-80 ${isHover ? 'items-start' : 'items-center'}`}>
               {!isMobile && <AudioPlayer isHover={isHover} isMobile={isMobile} />}
         </div>
      </div>
   )
}

export default MusicBox