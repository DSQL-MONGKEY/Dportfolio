"use client"

import React, { useEffect, useRef, useState } from 'react'

import Frequency from './Frequency';
import { Progress } from '@/components/ui/Progress';
import Controls from './Controls';
import { musicPlaylist } from '@/common/constants/music';
import { useMusic } from '@/stores/music';

interface AudioPlayerProps {
   isHover?: boolean
   isMobile?: boolean
}

const AudioPlayer = ({ isHover = true, isMobile }: AudioPlayerProps) => {
   const [audioData, setAudioData] = useState<number[]>(Array(20).fill(100)); // Initial heights
   const audioElementRef = useRef<HTMLAudioElement | null>(null);
   const audioContextRef = useRef<AudioContext | null>(null);
   const analyserRef = useRef<AnalyserNode | null>(null);
   const animationIdRef = useRef<number | null>(null);
   const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

   const { 
      isPlaying,
      setIsPlaying,
      currentTime,
      setCurrentTime,
      progress,
      setProgress,
      duration,
      setDuration,
      title,
      setTitle,
      currentTrackIndex,
      setCurrentTrackIndex,
   } = useMusic();


   const handlePlayPause = () => {
      if(isPlaying) {
         audioElementRef.current?.pause();
         setIsPlaying(false);
      } else {
         audioElementRef.current?.play();
         setIsPlaying(true);
      }
   }

   const handleNextTrack = () => {
      const nextIndex = (currentTrackIndex + 1) % musicPlaylist.length;
      setCurrentTrackIndex(nextIndex);
      audioElementRef.current?.play()
   }

   const handlePrevTrack = () => {
      const prevIndex = currentTrackIndex - 1;
      setCurrentTrackIndex(prevIndex)
      audioElementRef.current?.play()
   }

   const handleTimeUpdate = () => {
      if(audioElementRef.current) {
         setCurrentTime(audioElementRef.current.currentTime);
         setProgress(
            (audioElementRef.current.currentTime / audioElementRef.current.duration) * 100
         );
         setDuration(audioElementRef.current.duration);
      }
   }

   const handleLoadedMetaData = () => {
      if(audioElementRef.current) {
         setDuration(audioElementRef.current.duration);
      }
   }

   const formatTime = (time: number) => {
      if(time && !isNaN(time)) {
         const minutes  = Math.floor(time / 60);
         const seconds  = Math.floor(time % 60);
         return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
      }
      return "00:00"
   }

   const setupAudio = () => {
      if(audioContextRef.current) return;

      audioContextRef.current = new (window.AudioContext ||
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         (window as any).webkitAudioContext)();
      const audio = audioElementRef.current!;

      sourceRef.current = audioContextRef.current.createMediaElementSource(audio);

      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;

      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);

      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

      const updatedAudioData = () => {
         analyserRef.current!.getByteFrequencyData(dataArray);

         const normalizedData = Array.from(dataArray)
            .slice(0, 30)
            .map((value) => {
               return (value / 255) * 200 + 100;
            })

         setAudioData(normalizedData);

         animationIdRef.current = requestAnimationFrame(updatedAudioData);
      }

      animationIdRef.current = requestAnimationFrame(updatedAudioData)
   }

   useEffect(() => {
      if (isPlaying) {
         audioElementRef.current?.play();
      } else {
         audioElementRef.current?.pause();
      }
      setTitle(musicPlaylist[currentTrackIndex].title)
   }, [currentTrackIndex, isPlaying, setTitle]);

   return (
      <>
         <div className={`flex flex-col justify-center space-y-2`}>
            <audio
               ref={audioElementRef}
               onPlay={setupAudio}
               onTimeUpdate={handleTimeUpdate}
               onLoadedMetadata={handleLoadedMetaData}
               onEnded={handleNextTrack}
               src={musicPlaylist[currentTrackIndex].src}
               hidden={true}
            />

            {!isMobile && (
               <Frequency 
                  audioData={audioData}
                  className={`bottom-0 ${isHover ? 'h-52 w-52' : 'duration-300 ease-in-out h-80 w-52 ml-16 absolute overflow-hidden'}`}
                  animationIdRef={animationIdRef}
                  audioContextRef={audioContextRef}
                  sourceRef={sourceRef}
               />
            )}
            
            {isHover ? (
               <Controls 
                  onClick={{ handlePrevTrack, handleNextTrack, handlePlayPause }}
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
         
      </>
   )
}

export default AudioPlayer