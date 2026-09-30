import Marquee from '@/components/ui/Marquee';
import { Progress } from '@/components/ui/Progress';
import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/common/lib/utils';
import { RepeatMode } from '@/stores/music';
import React, { ReactNode } from 'react'

import {    LiaPlayCircle } from "react-icons/lia";
import { MdMotionPhotosPause } from "react-icons/md";
import { SlControlRewind } from "react-icons/sl";
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from "react-icons/tb";

interface ControlsProps {
   onClick: {
      handlePrevTrack: () => void
      handleNextTrack: () => void
      handlePlayPause: () => void
      handleCycleRepeat: () => void
   }
   title: string
   isPlaying: boolean
   progress: number
   formatTime: (time: number) => ReactNode
   currentTime: number
   duration: number
   repeatMode: RepeatMode
}

const Controls = ({ onClick, title, isPlaying, progress, formatTime, currentTime, duration, repeatMode }: ControlsProps) => {
   const { handlePrevTrack, handleNextTrack, handlePlayPause, handleCycleRepeat } = onClick;
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
               aria-label="Previous track"
               onClick={handlePrevTrack}>
               <SlControlRewind/>
            </button>
            
            {/* play/pause button */}
            <button 
               className="text-2xl"
               aria-label={isPlaying ? 'Pause' : 'Play'}
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
               aria-label="Next track"
               onClick={handleNextTrack}
            >
               <SlControlRewind className="rotate-180" />
            </button>

            {/* repeat mode button */}
            <button
               className={cn(
                  'text-2xl transition-colors',
                  repeatMode !== 'off' && 'text-shineRed'
               )}
               aria-label={`Repeat: ${repeatMode}`}
               aria-pressed={repeatMode !== 'off'}
               title={`Repeat: ${repeatMode}`}
               onClick={handleCycleRepeat}
            >
               {repeatMode === 'off' ? (
                  <TbRepeatOff />
               ) : repeatMode === 'all' ? (
                  <TbRepeat />
               ) : (
                  <TbRepeatOnce />
               )}
            </button>
         </div>
      </>
   )
}

export default Controls
