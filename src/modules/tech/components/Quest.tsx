"use client"

import React, { useEffect } from 'react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { questCopy } from '@/common/constants/quest'
import { useMiniGames } from '@/stores/mini-games'
import QuestLanguageToggle from './quest/QuestLanguageToggle'
import QuestPlayer from './quest/QuestPlayer'

const Quest = () => {
   const locale = useMiniGames((state) => state.locale)
   const loadPersistedState = useMiniGames((state) => state.loadPersistedState)
   const copy = questCopy[locale]

   useEffect(() => {
      loadPersistedState()
   }, [loadPersistedState])

   return (
      <section>
         <NeoSectionHeading
            title={copy.title}
            description={copy.subtitle}
            badge={copy.badge}
            badgeClassName="bg-[#F4CE14]"
         />

         <div className="mb-3 flex justify-end">
            <QuestLanguageToggle />
         </div>

         <QuestPlayer />
      </section>
   )
}

export default Quest
