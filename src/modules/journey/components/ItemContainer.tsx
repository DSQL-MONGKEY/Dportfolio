import Image, { StaticImageData } from 'next/image'
import React, { forwardRef, RefObject } from 'react'

interface ItemContainerProps {
   title: string
   role: string
   logo: StaticImageData
   date: string
   imgHeight?: number
   imgWidth?: number
   className?: string
   ref: RefObject<HTMLImageElement>
}

const ItemContainer = forwardRef<
   HTMLImageElement,
   ItemContainerProps
   >(({ className = '', title, role, logo, date, }, ref) => {
   
   return (
      <div  className='flex flex-col md:flex-row items-center gap-1 h-28 w-72  z-30'>
         <div className='p-2 rounded-full'>
            <Image
               ref={ref}
               height={100}
               width={100}
               alt='img'
               src={logo}
               className='rounded-full'
            />
         </div>

         <div className={`space-y-2 px-2 py-3 ${className}`}>
            <h3>{title}</h3>
            <p>{role}</p>
            <span>{date}</span>
         </div>
      </div>
   )
})

ItemContainer.displayName = "ItemContainer";

export default ItemContainer