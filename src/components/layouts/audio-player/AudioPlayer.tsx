"use client"

import React from 'react'

import Frequency from './Frequency';
import { Progress } from '@/components/ui/Progress';
import Controls from './Controls';
import { useMusic } from '@/stores/music';
import { formatTime } from '@/common/lib/utils';

interface AudioPlayerProps {
   isHover?: boolean
   isMobile?: boolean
}

const AudioPlayer = ({ isHover = true, isMobile }: AudioPlayerProps) => {
   const isPlaying = useMusic(state => state.isPlaying);
   const progress = useMusic(state => state.progress);
   const currentTime = useMusic(state => state.currentTime);
   const duration = useMusic(state => state.duration);
   const title = useMusic(state => state.title);
   const togglePlay = useMusic(state => state.togglePlay);
   const nextTrack = useMusic(state => state.nextTrack);
   const prevTrack = useMusic(state => state.prevTrack);

   return (
      <div className={`flex flex-col justify-center space-y-2`}>
         {!isMobile && (
            <Frequency 
               className={`bottom-0 ${isHover ? 'h-52 w-52' : 'duration-300 ease-in-out h-80 w-52 ml-16 absolute overflow-hidden'}`}
            />
         )}
         
         {isHover ? (
            <Controls 
               onClick={{ handlePrevTrack: prevTrack, handleNextTrack: nextTrack, handlePlayPause: togglePlay }}
               title={title}
               isPlaying={isPlaying}
               progress={progress}
               formatTime={formatTime}
               currentTime={currentTime}
               duration={duration}
            />
         ) : (
            <div className=" ">
               <Progress   
                  value={progress}
                  className="w-52 -rotate-90"
               />
            </div>
         )}
      </div>
   )
}

export default AudioPlayer
