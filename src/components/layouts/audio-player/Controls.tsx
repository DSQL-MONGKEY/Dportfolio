import Marquee from '@/components/ui/Marquee';
import { Progress } from '@/components/ui/Progress';
import useIsMobile from '@/hooks/useIsMobile';
import React, { ReactNode } from 'react'

import {    LiaPlayCircle } from "react-icons/lia";
import { MdMotionPhotosPause } from "react-icons/md";
import { SlControlRewind } from "react-icons/sl";

interface ControlsProps {
   onClick: {
      handlePrevTrack: () => void
      handleNextTrack: () => void
      handlePlayPause: () => void
   }
   title: string
   isPlaying: boolean
   progress: number
   formatTime: (time: number) => ReactNode
   currentTime: number
   duration: number
}

const Controls = ({ onClick, title, isPlaying, progress, formatTime, currentTime, duration }: ControlsProps) => {
   const { handlePrevTrack, handleNextTrack, handlePlayPause } = onClick;
   const isMobile = useIsMobile();

   return (
      <>
         <div className={isMobile ? 'w-full' : 'w-52'}>
               <Progress 
                  value={progress}
                  className="w-full"
               />
                  <div className="flex justify-between text-sm text-neutral-900 dark:text-neutral-200 mt-3 md:mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
               </div>
               <Marquee
                  repeat={4}
                  className={`[--duration:5s]`} 
                  key={title}               >
                     <span>
                        {title}
                     </span>
               </Marquee>
            </div>

         <div className="flex justify-between">
            {/* previous song button */}
            <button 
               className="text-2xl"
               onClick={handlePrevTrack}>
               <SlControlRewind/>
            </button>
            
            {/* play/pause button */}
            <button 
               className="text-2xl"
               onClick={handlePlayPause}>
               {isPlaying ? (
                  <MdMotionPhotosPause/>
               ) : (
                  <LiaPlayCircle />
               )
               }
            </button>
            
            {/* next song button */}
            <button
               className="text-2xl"
               onClick={handleNextTrack}
            >
               <SlControlRewind className="rotate-180" />
            </button>
         </div>
      </>
   )
}

export default Controls