import Image from 'next/image'
import React, { RefObject } from 'react'

interface ItemContainerProps {
   // title: string,
   // role: string
   // logo: string,
   // date: string,
   imgHeight?: number
   imgWidth?: number
   className?: string
   ref: RefObject<HTMLElement>
}

const ItemContainer = ({ className = '' }: ItemContainerProps) => {
   
   return (
      <div className='flex flex-col md:flex-row items-center gap-1 h-28 w-72 bg-blue-200'>
         <Image
            height={100}
            width={100}
            alt='img'
            src={''}
         />

         <div className=''>
            <h3>COMPANY NAME</h3>
            <p>JOB ROLE</p>
         </div>
      </div>
   )
}

export default ItemContainer