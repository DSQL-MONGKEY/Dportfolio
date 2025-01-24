import { skillSet } from '@/common/constants/constants'
import React from 'react'
import Card from './Card'

const Board = () => {


   return (
      <div className="p-2 border-2 border-black rounded-lg">
         <div className="flex flex-row flex-wrap justify-evenly gap-3 ">
            {skillSet.map((skill, index) => (
               <Card 
                  key={index} 
                  title={skill.title} 
                  id={index} 
                  label={skill.label} 
                  icon={skill.icon} 
                  level={skill.level} 
               />
            ))}
         </div>
      </div>
   )
}

export default Board