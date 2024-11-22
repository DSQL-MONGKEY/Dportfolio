"use client"

import React, { useRef, useState } from 'react'

import { LiaPlayCircle } from "react-icons/lia";

interface AudioTrack {
   musicCover: string,
   src:   string,
   artist: string,
   title: string
}

const AudioPlayer = () => {
   const [tracks, setTracks] = useState<AudioTrack[]>([]);
   const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
   const [isPlaying, setIsPlaying] = useState<boolean>(false);
   const [progress, setIsProgress] = useState<number>(0);
   const [currentTime, setCurrentTime] = useState<number>(0);
   const [duration, setDuration] = useState<number>(0);  
   const audioElementRef = useRef<HTMLAudioElement | null>(null);

   const handleNextTrack = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
   }

   

   return (
      <div>

      </div>
   )
}

export default AudioPlayer