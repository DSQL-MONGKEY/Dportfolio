export type QuestLocale = 'en' | 'id'

export type QuestCategoryId = 'tech' | 'general' | 'history' | 'riddles'

export type QuestStatus = 'idle' | 'playing' | 'finished'

export interface LocalizedText {
   en: string
   id: string
}

export interface QuestChoice {
   answer: LocalizedText
   isCorrect: boolean
}

export interface QuestQuestion {
   type: QuestCategoryId
   question: LocalizedText
   choices: QuestChoice[]
   clue?: LocalizedText
   solution?: LocalizedText
}
