import { create } from 'zustand'
import { QuestCategoryId, QuestLocale, QuestQuestion, QuestStatus } from '@/common/types/quest'

const BEST_SCORES_KEY = 'quest-best-scores'
const LOCALE_KEY = 'quest-locale'

export const MAX_LIVES = 3
export const MAX_HINTS = 2

const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5)

export interface MiniGamesState {
   status: QuestStatus
   category: QuestCategoryId | null
   questions: QuestQuestion[]
   index: number
   score: number
   streak: number
   bestStreak: number
   lives: number
   hints: number
   selectedChoice: number | null
   isLocked: boolean
   correctCount: number
   locale: QuestLocale
   bestScores: Partial<Record<QuestCategoryId, number>>
   newBest: boolean
}

export interface MiniGamesActions {
   setLocale: (locale: QuestLocale) => void
   loadPersistedState: () => void
   startGame: (category: QuestCategoryId, questions: QuestQuestion[]) => void
   answer: (choiceIndex: number) => void
   next: () => void
   useHint: () => void
   recordBestScore: () => void
   reset: () => void
}

export const useMiniGames = create<MiniGamesState & MiniGamesActions>()((set, get) => ({
   status: 'idle',
   category: null,
   questions: [],
   index: 0,
   score: 0,
   streak: 0,
   bestStreak: 0,
   lives: MAX_LIVES,
   hints: MAX_HINTS,
   selectedChoice: null,
   isLocked: false,
   correctCount: 0,
   locale: 'en',
   bestScores: {},
   newBest: false,

   setLocale: (locale) => {
      set({ locale })
      try {
         window.localStorage.setItem(LOCALE_KEY, locale)
      } catch {
         // storage unavailable
      }
   },

   loadPersistedState: () => {
      try {
         const rawScores = window.localStorage.getItem(BEST_SCORES_KEY)
         const locale = window.localStorage.getItem(LOCALE_KEY)

         set({
            bestScores: rawScores ? JSON.parse(rawScores) : {},
            locale: locale === 'id' ? 'id' : 'en',
         })
      } catch {
         // storage unavailable
      }
   },

   startGame: (category, questions) => set({
      status: 'playing',
      category,
      questions: shuffle(questions).map((question) => ({
         ...question,
         choices: shuffle(question.choices),
      })),
      index: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      lives: MAX_LIVES,
      hints: MAX_HINTS,
      selectedChoice: null,
      isLocked: false,
      correctCount: 0,
      newBest: false,
   }),

   answer: (choiceIndex) => {
      const { isLocked, questions, index, score, streak, bestStreak, lives, correctCount } = get()
      const question = questions[index]
      if (isLocked || !question) return

      const isCorrect = question.choices[choiceIndex]?.isCorrect ?? false
      const nextStreak = isCorrect ? streak + 1 : 0
      const points = isCorrect ? 10 + (nextStreak >= 3 ? 5 : 0) : 0

      set({
         selectedChoice: choiceIndex,
         isLocked: true,
         score: score + points,
         streak: nextStreak,
         bestStreak: Math.max(bestStreak, nextStreak),
         lives: isCorrect ? lives : lives - 1,
         correctCount: correctCount + (isCorrect ? 1 : 0),
      })
   },

   next: () => {
      const { index, questions, lives } = get()

      if (lives <= 0 || index >= questions.length - 1) {
         set({ status: 'finished' })
         return
      }

      set({ index: index + 1, selectedChoice: null, isLocked: false })
   },

   useHint: () => {
      const { hints, isLocked } = get()
      if (hints <= 0 || isLocked) return

      set({ hints: hints - 1 })
   },

   recordBestScore: () => {
      const { category, score, bestScores } = get()
      if (!category) return

      const currentBest = bestScores[category] ?? 0
      if (score <= currentBest) return

      const nextBestScores = { ...bestScores, [category]: score }
      set({ bestScores: nextBestScores, newBest: true })

      try {
         window.localStorage.setItem(BEST_SCORES_KEY, JSON.stringify(nextBestScores))
      } catch {
         // storage unavailable
      }
   },

   reset: () => set({
      status: 'idle',
      category: null,
      questions: [],
      index: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      lives: MAX_LIVES,
      hints: MAX_HINTS,
      selectedChoice: null,
      isLocked: false,
      correctCount: 0,
      newBest: false,
   }),
}))
