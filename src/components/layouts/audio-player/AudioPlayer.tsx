"use client"

import React, { useEffect, useRef, useState } from 'react'

import Frequency from './Frequency';
import { Progress } from '@/components/ui/Progress';
import Controls from './Controls';

interface AudioTrack {
   musicCover: string,
   src:   string,
   artist: string,
   title: string
}

interface AudioPlayerProps {
   isHover: boolean
}

const AudioPlayer = ({ isHover }: AudioPlayerProps) => {
   const [audioData, setAudioData] = useState<number[]>(Array(20).fill(100)); // Initial heights
   const [tracks, setTracks] = useState<AudioTrack[]>([]);
   const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
   const [isPlaying, setIsPlaying] = useState<boolean>(false);
   const [progress, setProgress] = useState<number>(0);
   const [currentTime, setCurrentTime] = useState<number>(0);
   const [duration, setDuration] = useState<number>(0);  
   const audioElementRef = useRef<HTMLAudioElement | null>(null);
   const audioContextRef = useRef<AudioContext | null>(null);
   const analyserRef = useRef<AnalyserNode | null>(null);
   const animationIdRef = useRef<number | null>(null);
   const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

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
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
   }

   const handlePrevTrack = () => {
      setCurrentTrackIndex((prevIndex) => prevIndex === 0 ? tracks.length - 1 : prevIndex - 1)
   }

   const handleTimeUpdate = () => {
      if(audioElementRef.current) {
         setCurrentTime(audioElementRef.current.currentTime);
         setProgress(
            (audioElementRef.current.currentTime / audioElementRef.current.duration) * 100
         );
      }
   }

   const handleLoadedMetaData = () => {
         console.log(audioElementRef.current.duration);
   }

   const formatTime = (time: number) => {
      const minutes  = Math.floor(time / 60);
      const seconds  = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
   }

   const setupAudio = () => {
      if(audioContextRef.current) return;

      audioContextRef.current = new (window.AudioContext ||
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
      if(audioElementRef.current) {
         if(isPlaying) {
            audioElementRef.current.play();
         } else {
            audioElementRef.current.pause();
         }
      }
   }, [currentTrackIndex, tracks, isPlaying]);

   return (
      <div className="">
         <div className="flex flex-col justify-center space-y-2">
            <audio
               ref={audioElementRef}
               onPlay={setupAudio}
               onTimeUpdate={handleTimeUpdate}
               onLoadedMetadata={handleLoadedMetaData}
               src={'/music/Die with a Smile.mp3'}
               hidden={true}
            />

            <Frequency 
               audioData={audioData} 
               ref={{ animationIdRef, audioContextRef, sourceRef }} 
            />
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

            <Controls 
               onClick={{ handlePrevTrack, handleNextTrack, handlePlayPause }}
               isPlaying={isPlaying}
            />
         </div>

         {isHover === false && (
            <Progress 
            value={progress}
            className="w-52 rotate-90"
            />
         )}
      </div>
   )
}

export default AudioPlayer