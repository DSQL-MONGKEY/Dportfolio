import { create } from 'zustand';

export interface InitialMusicState {
   isPlaying: boolean,
   progress: number,
   currentTime: number,
   currentTrackIndex: number,
   duration: number,
   title: string
}

export interface InitialMusicAction {
   setIsPlaying: (isPlaying: boolean) => void,
   setProgress: (progress: number) => void,
   setCurrentTime: (currentTime: number) => void,
   setCurrentTrackIndex: (currentTrackIndex: number) => void,
   setDuration: (duration: number) => void,
   setTitle: (title: string) => void,
}

export const useMusic = create<InitialMusicState & InitialMusicAction>()( set => ({
   isPlaying: false,
   progress: 0,
   currentTime: 0,
   currentTrackIndex: 0,
   duration: 0,
   title: '',
   setIsPlaying: () => set(prev => ({ isPlaying: !prev.isPlaying })),
   setProgress: (progress) => set({ progress }),
   setCurrentTime: (currentTime) => set({ currentTime }),
   setCurrentTrackIndex: (prevIndex) => set(({ currentTrackIndex: prevIndex })),
   setDuration: (duration) => set({ duration }),
   setTitle: (title) => set({ title: title }),
}))

