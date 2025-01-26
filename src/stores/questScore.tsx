import { create } from 'zustand';


export interface InitialQuestScoreState {
   rightAnswer: number,
   wrongAnswer: number,
   currentScore: number,
   previousScore: number,
   totalScore: number,
   totalMatches: number,
}

export interface InitialQuestScoreAction {
   setRightAnswer: (rightAnswer: number) => void,
   setWrongAnswer: (wrongAnswer: number) => void,
   setCurrentScore: (currentScore: number) => void,
   setPreviousScore: (previousScore: number) => void,
   setTotalScore: (totalScore: number) => void,
   setTotalMatches: (totalMatches: number) => void,
}

export const useQuestScore = create<InitialQuestScoreState & InitialQuestScoreAction>()(set => ({
   rightAnswer: 0,
   wrongAnswer: 0,
   currentScore: 0,
   previousScore: 0,
   totalScore: 0,
   totalMatches: 0,
   setRightAnswer: (rightAnswer) => set({ rightAnswer }),
   setWrongAnswer: (wrongAnswer) => set({ wrongAnswer }),
   setCurrentScore: (currentScore) => set({ currentScore }),
   setPreviousScore: (previousScore) => set({ previousScore }),
   setTotalScore: (totalScore) => set({ totalScore }),
   setTotalMatches: (totalMatches) => set({ totalMatches }),
}))