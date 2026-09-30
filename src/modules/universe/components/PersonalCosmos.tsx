import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Cpu, MapPin, Music, PawPrint } from 'lucide-react'
import { musicPlaylist } from '@/common/constants/music'

const favoriteArtists = Array.from(
   new Set(musicPlaylist.map((track) => track.artist.split(' - ')[0]))
)
   .slice(0, 4)
   .join(', ')

const cards = [
   {
      title: 'On repeat',
      description: `${favoriteArtists} — the playlist never stops.`,
      href: '/playlist',
      icon: Music,
      accent: '#8ad451',
   },
   {
      title: 'Tinkering',
      description: 'LoRa trackers, MQTT dispensers, and whatever the ESP32 allows.',
      href: '/projects',
      icon: Cpu,
      accent: '#25F4EE',
   },
   {
      title: 'Home base',
      description: 'Depok, Indonesia — building from UTC+7.',
      href: '',
      icon: MapPin,
      accent: '#F4CE14',
   },
   {
      title: 'Panda energy',
      description: 'Calm, focused, and always hungry for the next build.',
      href: '',
      icon: PawPrint,
      accent: '#E1306C',
   },
]

const PersonalCosmos = () => {
   return (
      <section>
         <div className="mb-4">
            <h2 className="font-lexend text-xl font-black uppercase tracking-[0.2em]">
               Beyond the Code
            </h2>
            <p className="mt-1 font-outfit text-sm opacity-70">
               Signals from my personal cosmos — the non-work stuff that keeps me going.
            </p>
         </div>

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card) => {
               const Icon = card.icon

               const content = (
                  <>
                     <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mainDark text-mainDark dark:border-darkBorder"
                        style={{ backgroundColor: card.accent }}
                     >
                        <Icon size={18} />
                     </span>
                     <span className="mt-3 font-lexend text-sm font-bold">{card.title}</span>
                     <span className="mt-1 flex-1 font-outfit text-xs leading-relaxed opacity-70">
                        {card.description}
                     </span>
                     {card.href && (
                        <span className="mt-3 flex items-center gap-1 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2">
                           Visit <ArrowUpRight size={12} />
                        </span>
                     )}
                  </>
               )

               const cardClass =
                  'flex h-full flex-col border-2 border-mainDark bg-main p-4 transition-transform hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack'

               return card.href ? (
                  <Link
                     key={card.title}
                     href={card.href}
                     className={cardClass}
                     style={{ boxShadow: `4px 4px 0px 0px ${card.accent}` }}
                  >
                     {content}
                  </Link>
               ) : (
                  <div
                     key={card.title}
                     className={cardClass}
                     style={{ boxShadow: `4px 4px 0px 0px ${card.accent}` }}
                  >
                     {content}
                  </div>
               )
            })}
         </div>
      </section>
   )
}

export default PersonalCosmos
