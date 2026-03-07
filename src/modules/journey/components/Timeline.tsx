"use client"

import React from 'react'
import ItemContainer from './ItemContainer'
import { journeys } from '@/common/constants/constants'
import ItemDetails from './ItemDetails'
import JourneyBottomLine from './JourneyBottomLine'


const Timeline = () => {

   

   return (
      <section>
         <div className='flex flex-col gap-5'>
            {journeys.map((data, idx) => (
               <ItemDetails 
                  key={idx} 
                  title={data.title} 
                  logo={data.logo}
                  role={data.role}
                  date={data.date}
                  isPresent={data.isPresent}
                  jobDesc={data.jobDesc}
                  coworks={data.coworks}
               >
                  <ItemContainer
                     title={data.title}
                     role={data.role}
                     date={data.date}
                     className={idx % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}
                  />
               </ItemDetails>
            ))}
            <JourneyBottomLine />
         </div>
      </section> 
   )
}

export default Timeline