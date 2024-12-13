"use client"

import React from 'react'
import ItemContainer from './ItemContainer'
import { journeys } from '@/common/constants/constants'


const Timeline = () => {

   return (
      <section>
         <div className='flex flex-col gap-5'>
            {journeys.map((data, idx) => (
               <ItemContainer
                  key={idx}
                  title={data.title}
                  role={data.role}
                  date={data.date}
                  className={idx % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}
               />
            ))}
         </div>
      </section>
   )
}

export default Timeline