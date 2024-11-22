import BentoCard from '@/components/ui/BentoCard'
import React from 'react'

interface ServicesCardProps {
   icon: JSX.Element
   id: string
   title: string
   description: string
}

const ServicesCard = ({ icon, id, title, description }: ServicesCardProps) => {
   return (
      <BentoCard key={id} className='flex items-center justify-center gap-5 border border-black dark:border-slate-200 hover:bg-slate-300 dark:hover:bg-cyan-500 hover:scale-105 hover:shadow-light dark:hover:shadow-[0px, 20px, 20px, 5px, #000] hover:-translate-y-boxShadowX duration-300'>
         <div className='text-5xl'>
            {icon}
         </div>
         <div className="flex flex-col">
            <h3 className='text-xl font-outfit'>
               {title}
            </h3>
            <p>{description}</p>
         </div>
      </BentoCard>
   )
}

export default ServicesCard