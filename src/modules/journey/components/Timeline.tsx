"use client"

import React from 'react'
import { cn } from '@/common/lib/utils'
import { journeys } from '@/common/constants/constants'
import ItemDetails from './ItemDetails'
import JourneyBottomLine from './JourneyBottomLine'
import JourneyCard from './JourneyCard'

const shadows = [
   'shadow-[4px_4px_0px_0px_#F4CE14]',
   'shadow-[4px_4px_0px_0px_#25F4EE]',
   'shadow-[4px_4px_0px_0px_#E1306C]',
   'shadow-[4px_4px_0px_0px_#8ad451]',
]

const offsets = ['', 'sm:mt-10', 'sm:mt-4', 'sm:mt-8']

const Timeline = () => {
   const orderedJourneys = [...journeys].reverse()

   return (
      <section className='mt-2'>
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {orderedJourneys.map((data, index) => (
               <div
                  key={data.title}
                  data-aos="fade-up"
                  className={cn('h-full', offsets[index % offsets.length])}
               >
                  <ItemDetails
                     title={data.title}
                     logo={data.logo}
                     shortName={data.shortName}
                     role={data.role}
                     date={data.date}
                     isPresent={data.isPresent}
                     jobDesc={data.jobDesc}
                     coworks={data.coworks}
                  >
                     <JourneyCard
                        title={data.title}
                        role={data.role}
                        date={data.date}
                        isPresent={data.isPresent}
                        logo={data.logo}
                        shortName={data.shortName}
                        shadow={shadows[index % shadows.length]}
                     />
                  </ItemDetails>
               </div>
            ))}
         </div>

         <JourneyBottomLine />
      </section>
   )
}

export default Timeline
