import React from 'react'

interface ItemJourney {
   className: string
   
}

const ItemJourney = () => {
   return (
      <div className='flex items-center justify-between gap-5 p-5 bg-cyan-500 dark:bg-green-500 border-white h-72 rounded-xl'>
         <div className='bg-blue-300 flex items-center justify-center h-full w-64 rounded-3xl'>
            SCHOOL
         </div>
         <div className='grow h-full flex'>
            SMK CITRA NEGARA
         </div>
      </div>
   )
}

export default ItemJourney