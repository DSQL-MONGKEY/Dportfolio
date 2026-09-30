import React from 'react'
import PersonalCosmos from './components/PersonalCosmos'
import UniverseMap from './components/UniverseMap'
import WiseStars from './components/WiseStars'

const Universe = () => {
   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <section>
            <div className="flex flex-wrap items-center gap-3">
               <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">Universe</h1>
               <span className="border-2 border-mainDark bg-[#F4CE14] px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
                  6 worlds
               </span>
               <span className="border-2 border-mainDark bg-main px-2 py-0.5 font-outfit text-xs font-bold dark:border-darkBorder dark:bg-secondaryBlack">
                  tap a node
               </span>
            </div>

            <p className="mt-2 max-w-xl font-outfit text-sm opacity-70">
               One hub, six worlds: code, stack, career, sound, socials, and notes. Pick a node and
               jump in — everything else on this site orbits from here.
            </p>
         </section>

         <UniverseMap />

         <PersonalCosmos />

         <WiseStars />
      </div>
   )
}

export default Universe
