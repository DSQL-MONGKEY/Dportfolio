import { create } from "zustand";

export interface InitialMiniGamesState {
   category: string,
   isPlaying: boolean,
   isGameOver: boolean,
   isComplete: boolean,
   isDeadTime: number,
   progress: number,
   streaksScore: number,
   currentScore: number,

}

export interface InitialMiniGamesAction {
   setCategory: (category: string) => void,
   setIsPlaying: (isPlaying: boolean) => void,
   setIsGameOver: (isGameOver: boolean) => void,
   setIsComplete: (isComplete: boolean) => void,
   setIsDeadTime: (isDeadTime: number) => void,
   setProgress: (progress: number) => void,
   setStreaksScore: (streaksScore: number) => void,
   setCurrentScore: (currentScore: number) => void,
}

export const useMiniGames = create<InitialMiniGamesState & InitialMiniGamesAction>()(set => ({
   category: '',
   isPlaying: false,
   isGameOver: false,
   isComplete: false,
   isDeadTime: 0,
   progress: 0,
   streaksScore: 0,
   currentScore: 0,

   setCategory: (category) => set({ category }),
   setIsGameOver: (isGameOver) => set({ isGameOver }),
   setIsComplete: (isComplete) => set({ isComplete }),
   setIsDeadTime: (isDeadTime) => set({ isDeadTime }),
   setIsPlaying: () => set(prev => ({ isPlaying: !prev.isPlaying })),
   setProgress: (progress) => set({ progress }),
   setStreaksScore: (streaksScore) => set({ streaksScore }),
   setCurrentScore: (currentScore) => set({ currentScore }),

}))