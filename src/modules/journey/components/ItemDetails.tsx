
"use client"

import React, { ReactNode, useState } from 'react'
import {
   Drawer,
   DrawerContent,
   DrawerTrigger,
} from "@/components/ui/drawer"
import {
   Dialog,
   // DialogContent,
   // DialogTrigger,
} from "@/components/ui/dialog"
import useIsMobile from '@/hooks/useIsMobile';
import { StaticImageData } from 'next/image';
import Users from './Users';
import TabSelect from './TabSelect';

export interface CoworksTypes {
   name: string
   role: string
   tag: string
   opinion: string
   link: string
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


const ItemDetails = ({ children, title, jobDesc, role, coworks }: ItemDetailsProps) => {
   const isMobile = useIsMobile();
   const [selectedProfile, setSelectedProfile] = useState<CoworksTypes>({
      name: '',
      role: '',
      tag: '',
      opinion: '',
      link: '',
      image: ''
   })
   const [isSelected, setIsSelected] = useState(false);

   const handleSelectProfile = (data: CoworksTypes) => {
      setSelectedProfile(data)
      setIsSelected(true)
   }
   const handleCaseButton = () => {
      setIsSelected(false)
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
            <div className='flex flex-col h-full justify-between p-4 gap-3'>
               {isSelected ? 
                  <Users
                     link={selectedProfile.link}
                     name={selectedProfile.name}
                     tag={selectedProfile.tag}
                     role={selectedProfile.role}
                     opinion={selectedProfile.opinion}
                  /> :
                  <div className='flex flex-col w-full gap-2'>
                     <div className='flex flex-col'>
                        <span className='font-poppins'>
                           {title}
                        </span>
                        <span className='font-poppins'>
                           {role}
                        </span>
                     </div>
                     <p className='tracking-wider text-start font-semibold'>
                        {jobDesc}
                     </p>
                  </div>
               }
               <TabSelect
                  handleCaseButton={handleCaseButton}
                  handleSelectProfile={handleSelectProfile}
                  coworks={coworks}
               />
            </div>
         </DrawerContent>
      </Drawer>
   )
}

export default ItemDetails