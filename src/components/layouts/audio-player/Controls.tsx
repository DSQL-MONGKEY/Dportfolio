import { Progress } from '@/components/ui/Progress';
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
   isPlaying: boolean
   progress: number
   formatTime: (time: number) => ReactNode
   currentTime: number
   duration: number
}

const Controls = ({ onClick, isPlaying, progress, formatTime, currentTime, duration }: ControlsProps) => {
   const { handlePrevTrack, handleNextTrack, handlePlayPause } = onClick;

   return (
      <>
         <div className="w-52">
               <Progress 
                  value={progress}
                  className="w-52"
               />
               <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
               </div>
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