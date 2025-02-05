"use client"

import React from 'react'
import ItemCard from './ItemCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { devOps, tech, tools } from '@/common/constants/constants'
import PulseNotif from '@/components/elements/PulseNotif'

const Board = () => {
   


   return (
      <div className="flex flex-col justify-center w-full gap-6 my-5">
         <Tabs defaultValue='tech' className='flex flex-col justify-center'>
            <TabsList className='flex justify-around'>
               <TabsTrigger value='tech'>Techs</TabsTrigger>
               <TabsTrigger value='tools'>Tools</TabsTrigger>
               <TabsTrigger value='devops'>DevOps</TabsTrigger>
            </TabsList>
            <TabsContent value='tech' className='grid grid-cols-6 sm:grid-cols-9 gap-5'>
               {tech.map((item, idx) => (
                  <ItemCard
                     key={item.title}
                     title={item.title}
                     id={idx}
                     label={item.label}
                     icon={item.icon}
                     level={item.level}
                     onLearn={item.onLearn}
                  />
               ))}
            </TabsContent>
            <TabsContent value='tools' className='grid grid-cols-6 sm:grid-cols-9 gap-5'>
               {tools.map((item, idx) => (
                  <ItemCard
                     key={item.title}
                     title={item.title}
                     id={idx}
                     label={item.label}
                     icon={item.icon}
                     level={item.level}
                     onLearn={item.onLearn}
                  />
               ))}
            </TabsContent>
            <TabsContent value='devops' className='grid grid-cols-6 sm:grid-cols-9 gap-5'>
               {devOps.map((item, idx) => (
                  <ItemCard
                     key={item.title}
                     title={item.title}
                     id={idx}
                     label={item.label}
                     icon={item.icon}
                     level={item.level}
                     onLearn={item.onLearn}
                  />
               ))}
            </TabsContent>
         </Tabs>
         <PulseNotif 
            title='Currently Learning' 
            className='bg-calmBlue dark:bg-green-500' 
         />
      </div>
   )
}

export default Board