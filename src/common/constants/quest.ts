import { Cpu, Globe2, Landmark, Puzzle, type LucideIcon } from 'lucide-react'
import { LocalizedText, QuestCategoryId, QuestLocale, QuestQuestion } from '@/common/types/quest'
import { generalQuestions, historyQuestions, riddles, techQuestions } from './questions'

export interface QuestCategory {
   id: QuestCategoryId
   label: LocalizedText
   description: LocalizedText
   icon: LucideIcon
   accent: string
   shadow: string
   questions: QuestQuestion[]
}

export const questCategories: QuestCategory[] = [
   {
      id: 'tech',
      label: { en: 'Tech', id: 'Teknologi' },
      description: {
         en: 'Networks, databases, and programming basics.',
         id: 'Jaringan, database, dan dasar pemrograman.',
      },
      icon: Cpu,
      accent: '#F4CE14',
      shadow: 'shadow-[4px_4px_0px_0px_#F4CE14]',
      questions: techQuestions,
   },
   {
      id: 'general',
      label: { en: 'General', id: 'Umum' },
      description: {
         en: 'Geography, culture, and everyday facts.',
         id: 'Geografi, budaya, dan fakta sehari-hari.',
      },
      icon: Globe2,
      accent: '#25F4EE',
      shadow: 'shadow-[4px_4px_0px_0px_#25F4EE]',
      questions: generalQuestions,
   },
   {
      id: 'history',
      label: { en: 'History', id: 'Sejarah' },
      description: {
         en: 'Indonesian history from kingdoms to independence.',
         id: 'Sejarah Indonesia dari kerajaan sampai kemerdekaan.',
      },
      icon: Landmark,
      accent: '#E1306C',
      shadow: 'shadow-[4px_4px_0px_0px_#E1306C]',
      questions: historyQuestions,
   },
   {
      id: 'riddles',
      label: { en: 'Riddles', id: 'Teka-teki' },
      description: {
         en: 'Trick questions with a clue when you get stuck.',
         id: 'Pertanyaan jebakan dengan petunjuk kalau kamu buntu.',
      },
      icon: Puzzle,
      accent: '#8ad451',
      shadow: 'shadow-[4px_4px_0px_0px_#8ad451]',
      questions: riddles,
   },
]

export interface QuestCopy {
   title: string
   subtitle: string
   badge: string
   pickCategory: string
   start: string
   playAgain: string
   changeCategory: string
   question: string
   score: string
   streak: string
   lives: string
   hint: string
   next: string
   correct: string
   wrong: string
   gameOver: string
   win: string
   lose: string
   accuracy: string
   bestStreak: string
   best: string
   newBest: string
   solution: string
   noHints: string
   rank: string
   questionsLabel: string
   soundOn: string
   soundOff: string
}

export const questCopy: Record<QuestLocale, QuestCopy> = {
   en: {
      title: 'Quest!',
      subtitle: 'How well do you know tech, general knowledge, history, and riddles?',
      badge: 'mini games',
      pickCategory: 'Pick a category to start',
      start: 'Play',
      playAgain: 'Play again',
      changeCategory: 'Change category',
      question: 'Question',
      score: 'Score',
      streak: 'Streak',
      lives: 'Lives',
      hint: 'Hint',
      next: 'Next',
      correct: 'Correct!',
      wrong: 'Wrong!',
      gameOver: 'Game over',
      win: 'You cleared the quest!',
      lose: 'The quest got you this time.',
      accuracy: 'Accuracy',
      bestStreak: 'Best streak',
      best: 'Best',
      newBest: 'New best!',
      solution: 'Answer',
      noHints: 'No hints left',
      rank: 'Rank',
      questionsLabel: 'questions',
      soundOn: 'Sound on',
      soundOff: 'Sound off',
   },
   id: {
      title: 'Quest!',
      subtitle: 'Seberapa jauh kamu tahu soal teknologi, pengetahuan umum, sejarah, dan teka-teki?',
      badge: 'mini games',
      pickCategory: 'Pilih kategori buat mulai',
      start: 'Main',
      playAgain: 'Main lagi',
      changeCategory: 'Ganti kategori',
      question: 'Pertanyaan',
      score: 'Skor',
      streak: 'Streak',
      lives: 'Nyawa',
      hint: 'Petunjuk',
      next: 'Lanjut',
      correct: 'Benar!',
      wrong: 'Salah!',
      gameOver: 'Game over',
      win: 'Kamu menuntaskan quest-nya!',
      lose: 'Kali ini quest-nya menang.',
      accuracy: 'Akurasi',
      bestStreak: 'Streak terbaik',
      best: 'Terbaik',
      newBest: 'Rekor baru!',
      solution: 'Jawaban',
      noHints: 'Petunjuk habis',
      rank: 'Peringkat',
      questionsLabel: 'pertanyaan',
      soundOn: 'Suara nyala',
      soundOff: 'Suara mati',
   },
}

export interface QuestRank {
   min: number
   label: LocalizedText
}

export const questRanks: QuestRank[] = [
   { min: 90, label: { en: 'Tech Wizard', id: 'Tech Wizard' } },
   { min: 70, label: { en: 'Sharp Mind', id: 'Otak Tajam' } },
   { min: 50, label: { en: 'Solid Try', id: 'Lumayan' } },
   { min: 0, label: { en: 'Warm-up', id: 'Pemanasan' } },
]

export const getQuestRank = (accuracy: number) =>
   questRanks.find((rank) => accuracy >= rank.min) ?? questRanks[questRanks.length - 1]
