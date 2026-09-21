"use client"

import React, { useEffect, useRef } from 'react'
import { musicPlaylist } from '@/common/constants/music'
import { FREQUENCY_BARS, useMusic } from '@/stores/music'

const AudioEngine = () => {
   const audioElementRef = useRef<HTMLAudioElement | null>(null);
   const audioContextRef = useRef<AudioContext | null>(null);
   const analyserRef = useRef<AnalyserNode | null>(null);
   const animationIdRef = useRef<number | null>(null);
   const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

   const isPlaying = useMusic(state => state.isPlaying);
   const currentTrackIndex = useMusic(state => state.currentTrackIndex);
   const setCurrentTime = useMusic(state => state.setCurrentTime);
   const setProgress = useMusic(state => state.setProgress);
   const setDuration = useMusic(state => state.setDuration);
   const setTitle = useMusic(state => state.setTitle);
   const setAudioData = useMusic(state => state.setAudioData);
   const nextTrack = useMusic(state => state.nextTrack);

   const setupAudio = () => {
      const audio = audioElementRef.current;
      if (!audio || audioContextRef.current) return;

      const AudioContextClass = window.AudioContext ||
         (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      audioContextRef.current = new AudioContextClass();
      sourceRef.current = audioContextRef.current.createMediaElementSource(audio);

      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;

      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);

      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

      const updateAudioData = () => {
         analyserRef.current!.getByteFrequencyData(dataArray);

         setAudioData(
            Array.from(dataArray)
               .slice(0, FREQUENCY_BARS)
               .map((value) => (value / 255) * 100)
         );

         animationIdRef.current = requestAnimationFrame(updateAudioData);
      }

      animationIdRef.current = requestAnimationFrame(updateAudioData);
   }

   const handleTimeUpdate = () => {
      const audio = audioElementRef.current;
      if (!audio) return;

      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
      setDuration(audio.duration);
   }

   const handleLoadedMetadata = () => {
      if (audioElementRef.current) {
         setDuration(audioElementRef.current.duration);
      }
   }

   useEffect(() => {
      const audio = audioElementRef.current;
      if (!audio) return;

      if (isPlaying) {
         audio.play().catch(() => {});
      } else {
         audio.pause();
      }
   }, [isPlaying, currentTrackIndex]);

   useEffect(() => {
      setTitle(musicPlaylist[currentTrackIndex].title);
   }, [currentTrackIndex, setTitle]);

   useEffect(() => {
      return () => {
         if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

         sourceRef.current?.disconnect();
         audioContextRef.current?.close();
      };
   }, []);

   return (
      <audio
         ref={audioElementRef}
         onPlay={setupAudio}
         onTimeUpdate={handleTimeUpdate}
         onLoadedMetadata={handleLoadedMetadata}
         onEnded={nextTrack}
         src={musicPlaylist[currentTrackIndex].src}
         hidden={true}
      />
   )
}

export default AudioEngine
