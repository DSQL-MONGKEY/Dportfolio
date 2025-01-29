
"use client"

import React, { ReactNode, useState } from 'react'
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import useIsMobile from '@/hooks/useIsMobile';
import Image, { StaticImageData } from 'next/image';
import { FaBriefcase } from "react-icons/fa";
import Link from 'next/link';

interface CoworksTypes {
   name: string
   role: string
   tag?: string
   opinion?: string
   link?: string
   image: StaticImageData | string
}

interface ItemDetailsProps {
   children: ReactNode
   title: string
   logo?: StaticImageData 
   role: string
   date: string
   isPresent: boolean
   jobDesc: string
   coworks: Array<CoworksTypes>
}


const ItemDetails = ({ children, title, logo, role, date, isPresent, jobDesc, coworks }: ItemDetailsProps) => {
   const isMobile = useIsMobile();
   const [selectedProfile, setSelectedProfile] = useState<CoworksTypes>({
      name: '',
      role: '',
      tag: '',
      opinion: '',
      link: '',
      image: ''
   })

   const handleSelectProfile = (data: CoworksTypes) => {
      setSelectedProfile(data)
   }

   if(!isMobile) {
      return(
         <Dialog>
            {children}

         </Dialog>
      )
   }

   return (
      <Drawer>
         <DrawerTrigger>{children}</DrawerTrigger>
         <DrawerContent>
            <DialogTitle hidden></DialogTitle>
            <div className='flex flex-col p-4 gap-3'>
               
               <div id='user-profile' className='flex flex-row w-full'>
                  <div className='flex flex-col'>
                     <Link href={selectedProfile.link!} className='space-x-2'>
                        <span className='font-poppins text-lg'>
                           {selectedProfile.name}
                        </span>
                        <span className='font-poppins'>
                           @{selectedProfile.tag}
                        </span>
                     </Link>
                     <div className='font-outfit'>
                        <span>{selectedProfile.role}</span>
                     </div>
                  </div>
               </div>
               
               <div>
                  {selectedProfile.opinion}
               </div>

               <div className='flex flex-row items-center no-scrollbar overflow-y-hidden overflow-x-scroll w-full border-2 border-black dark:border-neutral-200 rounded-md space-x-3 gap-2 p-2'>
                  <div id='my-works' className='p-2 border-r-2 border-black'>
                     <FaBriefcase className='text-3xl' />
                  </div>
                  {coworks.map((data, idx) => (
                     <button
                        key={idx}
                        className="flex-shrink-0"
                        onClick={() => handleSelectProfile(data)}
                     >
                     <Image
                        width={50}
                        height={50}
                        alt={data.name || 'picture'}
                        src={data?.image}
                        className="rounded-full"
                     />
                     </button>
                  ))}
               </div>
            </div>
         </DrawerContent>
      </Drawer>
   )
}

export default ItemDetails