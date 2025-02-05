import React from 'react'

interface PulseNotifProps {
   title: string
   className: string
}

const PulseNotif = ({ title, className }: PulseNotifProps) => {
   return (
      <div className='relative flex items-center gap-2 border-green-500'>
         <span className={`absolute w-3 h-3 rounded-full animate-ping transition-all ${className}`}></span>
         <span className={`relative w-3 h-3 rounded-full ${className}`}></span>
         <span className='text-sm font-outfit'>
            {title}
         </span>
      </div>
   )
}

export default PulseNotif