"use client"

import React from 'react'
import { TypeAnimation as TypeAnimationComponent } from 'react-type-animation'

interface TypeAnimationProps {
   sequence: string[],
   delay?: number
}

const TypeAnimation = ({ sequence, delay = 1000 }: TypeAnimationProps) => {
   const textSequence: (string | number)[] = []

   sequence.forEach((item, idx) => {
      textSequence.push(item);

      if(idx < sequence.length) {
         textSequence.push(delay);
      }
   });

   return (
      <TypeAnimationComponent
         sequence={textSequence}
         deletionSpeed={80}
         repeat={Infinity}
         speed={11}
         aria-label={sequence[0]}
      />
   )
}

export default TypeAnimation


/**
 * @docs
 *  // Same substring at the start will only be typed once, initially
   'We produce food for Mice',
   1000,
   'We produce food for Hamsters',
   1000,
   'We produce food for Guinea Pigs',
   1000,
   'We produce food for Chinchillas',
   1000,
 */