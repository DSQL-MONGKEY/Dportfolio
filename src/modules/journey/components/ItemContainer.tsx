import Image from 'next/image'
import React, { forwardRef, RefObject } from 'react'

interface ItemContainerProps {
   // title: string,
   // role: string
   // logo: string,
   // date: string,
   image?: string,
   imgHeight?: number
   imgWidth?: number
   className?: string
   ref: RefObject<HTMLDivElement>
}

const ItemContainer = forwardRef<
   HTMLDivElement,
   ItemContainerProps
   >(({ className = '',  }, ref) => {
   
   return (
      <div ref={ref} className='flex flex-col md:flex-row items-center gap-1 h-28 w-72 bg-blue-200'>
         <Image
            height={100}
            width={100}
            alt='img'
            src={''}
         />

         <div className={`space-y-2 px-2 py-3 ${className}`}>
            <h3>COMPANY NAME</h3>
            <p>JOB ROLE</p>
         </div>
      </div>
   )
})

ItemContainer.displayName = "ItemContainer";

export default ItemContainer