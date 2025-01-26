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