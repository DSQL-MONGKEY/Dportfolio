import { create } from "zustand";

export interface InitialMiniGamesState {
   category: string,
   isPlaying: boolean,
   isGameOver: boolean,
   isComplete: boolean,
   isDeadTime: number,
   progress: number,
   streaksAnswer: number,
   currentScore: number,

}

export interface InitialMiniGamesAction {
   setCategory: (category: string) => void,
   setIsPlaying: (isPlaying: boolean) => void,
   setIsGameOver: (isGameOver: boolean) => void,
   setIsComplete: (isComplete: boolean) => void,
   setIsDeadTime: (isDeadTime: number) => void,
   setProgress: (progress: number) => void,
   setStreaksAnswer: (streaksAnswer: number) => void,
   setCurrentScore: (currentScore: number) => void,
}

export const useMiniGames = create<InitialMiniGamesState & InitialMiniGamesAction>()(set => ({
   category: '',
   isPlaying: false,
   isGameOver: false,
   isComplete: false,
   isDeadTime: 0,
   progress: 0,
   streaksAnswer: 0,
   currentScore: 0,

   setCategory: (category) => set({ category }),
   setIsGameOver: (isGameOver) => set({ isGameOver }),
   setIsComplete: (isComplete) => set({ isComplete }),
   setIsDeadTime: (isDeadTime) => set({ isDeadTime }),
   setIsPlaying: () => set(prev => ({ isPlaying: !prev.isPlaying })),
   setProgress: (progress) => set({ progress }),
   setStreaksAnswer: (streaksAnswer) => set({ streaksAnswer }),
   setCurrentScore: (currentScore) => set({ currentScore }),

}))