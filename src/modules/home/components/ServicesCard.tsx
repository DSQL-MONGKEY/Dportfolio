import clsx from 'clsx'
import React from 'react'

interface ServicesCardProps {
   icon: JSX.Element
   index: number
   title: string
   description: string
}

const ServicesCard = ({ icon, index, title, description }: ServicesCardProps) => {
   // The index is used to determine the background color of the card and justify the content, just remember the index is 0 based

   return (
   <div id={title} key={title} className={clsx('flex gap-5 h-36 rounded-md shadow-light justify-between items-center bg-green-600 dark:bg-[#FF8343] border-4 border-black', index % 2 == 0 ? 'flex-row' : 'flex-row-reverse' )}>
         <div className={`w-1/4 flex md:justify-center bg-slate-100 dark:bg-neutral-200 p-4 shadow-light dark:shadow-dark border-2 border-black ${index % 2 == 0 ? 'rounded-r-full' : 'rounded-l-full'}`}>
            <span className="text-7xl text-neutral-700 dark:text-cyan-700">
               {icon}
            </span>
         </div>
         <div className="w-2/3 m-4">
               <h3 className="text-2xl font-paytone text-neutral-100 dark:text-neutral-700">
                  {title}
               </h3>
               <p className="text-md font-outfit text-neutral-300 dark:text-neutral-700">
                  {description}
               </p>
         </div>
      </div>
   )
}

export default ServicesCard