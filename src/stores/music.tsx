import { create } from 'zustand';
import { musicPlaylist } from '@/common/constants/music';

export const FREQUENCY_BARS = 24;

export type RepeatMode = 'off' | 'all' | 'one';

export interface InitialMusicState {
   isPlaying: boolean,
   progress: number,
   currentTime: number,
   currentTrackIndex: number,
   duration: number,
   title: string,
   audioData: number[],
   repeatMode: RepeatMode
}

export interface InitialMusicAction {
   setIsPlaying: (isPlaying: boolean) => void,
   setProgress: (progress: number) => void,
   setCurrentTime: (currentTime: number) => void,
   setCurrentTrackIndex: (currentTrackIndex: number) => void,
   setDuration: (duration: number) => void,
   setTitle: (title: string) => void,
   setAudioData: (audioData: number[]) => void,
   togglePlay: () => void,
   cycleRepeat: () => void,
   nextTrack: () => void,
   prevTrack: () => void,
   selectTrack: (index: number) => void,
}

export const useMusic = create<InitialMusicState & InitialMusicAction>()( set => ({
   isPlaying: false,
   progress: 0,
   currentTime: 0,
   currentTrackIndex: 0,
   duration: 0,
   title: '',
   audioData: Array(FREQUENCY_BARS).fill(0),
   repeatMode: 'all',
   setIsPlaying: (isPlaying) => set({ isPlaying }), 
   setProgress: (progress) => set({ progress }),
   setCurrentTime: (currentTime) => set({ currentTime }),
   setCurrentTrackIndex: (index) => set({ currentTrackIndex: index }), 
   setDuration: (duration) => set({ duration }),
   setTitle: (title) => set({ title: title }),
   setAudioData: (audioData) => set({ audioData }),
   togglePlay: () => set(prev => ({ isPlaying: !prev.isPlaying })),
   cycleRepeat: () => set(prev => ({
      repeatMode: prev.repeatMode === 'off' ? 'all' : prev.repeatMode === 'all' ? 'one' : 'off'
   })),
   nextTrack: () => set(prev => ({
      currentTrackIndex: (prev.currentTrackIndex + 1) % musicPlaylist.length,
      isPlaying: true
   })),
   prevTrack: () => set(prev => ({
      currentTrackIndex: (prev.currentTrackIndex - 1 + musicPlaylist.length) % musicPlaylist.length,
      isPlaying: true
   })),
   selectTrack: (index) => set({ currentTrackIndex: index, isPlaying: true }),
}))
