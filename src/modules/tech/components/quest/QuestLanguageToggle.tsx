"use client"

import React from 'react'
import { cn } from '@/common/lib/utils'
import { useMiniGames } from '@/stores/mini-games'
import { QuestLocale } from '@/common/types/quest'

const locales: QuestLocale[] = ['en', 'id']

const QuestLanguageToggle = () => {
   const locale = useMiniGames((state) => state.locale)
   const setLocale = useMiniGames((state) => state.setLocale)

   return (
      <div className="flex items-center gap-1 border-2 border-mainDark bg-main p-1 dark:border-darkBorder dark:bg-secondaryBlack">
         {locales.map((item) => (
            <button
               key={item}
               type="button"
               onClick={() => setLocale(item)}
               className={cn(
                  'px-2.5 py-1 font-lexend text-[11px] font-black uppercase tracking-[0.15em] transition-colors',
                  locale === item
                     ? 'bg-[#F4CE14] text-mainDark'
                     : 'text-text opacity-60 hover:opacity-100 dark:text-darkText'
               )}
            >
               {item}
            </button>
         ))}
      </div>
   )
}

export default QuestLanguageToggle
