import { skillSet } from '@/common/constants/constants'
import React from 'react'
import Card from './Card'

const Board = () => {


   return (
      <div className="grid grid-cols-4 md:flex md:flex-wrap md:justify-around p-2 border-2 border-black dark:border-neutral-200 rounded-lg no-scrollbar h-72 max-h-96 overflow-y-scroll overflow-x-hidden mt-5">
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
   )
}

export default Board