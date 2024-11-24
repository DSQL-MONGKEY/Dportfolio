import React from 'react'

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
}

const Controls = ({ onClick, isPlaying }: ControlsProps) => {
   const { handlePrevTrack, handleNextTrack, handlePlayPause } = onClick;

   return (
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
   )
}

export default Controls