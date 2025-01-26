import { create } from "zustand";

export interface InitialMiniGamesState {
   isPlaying: boolean,
   isGameOver: boolean,
   isComplete: boolean,
   isDeadTime: number,
   progress: number,
}

export interface InitialMiniGamesAction {
   setIsPlaying: (isPlaying: boolean) => void,
   setIsGameOver: (isGameOver: boolean) => void,
   setIsComplete: (isComplete: boolean) => void,
   setIsDeadTime: (isDeadTime: number) => void,
   setProgress: (progress: number) => void,
}

export const useMiniGames = create<InitialMiniGamesState & InitialMiniGamesAction>()(set => ({
   isPlaying: false,
   isGameOver: false,
   isComplete: false,
   isDeadTime: 0,
   progress: 0,
   setIsPlaying: () => set(prev => ({ isPlaying: !prev.isPlaying })),
   setIsGameOver: (isGameOver) => set({ isGameOver }),
   setIsComplete: (isComplete) => set({ isComplete }),
   setIsDeadTime: (isDeadTime) => set({ isDeadTime }),
   setProgress: (progress) => set({ progress }),
}))