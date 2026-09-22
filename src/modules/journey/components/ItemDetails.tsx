"use client"

import React, { ReactNode, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
   Drawer,
   DrawerContent,
   DrawerTrigger,
} from '@/components/ui/drawer'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import useIsMobile from '@/hooks/useIsMobile'
import { Cowork } from '@/common/types/journey'
import TabSelect from './TabSelect'
import Users from './Users'

interface ItemDetailsProps {
   children: ReactNode
   title: string
   logo?: StaticImageData | ''
   shortName?: string
   role: string
   date: string
   isPresent: boolean
   jobDesc: string
   coworks: Cowork[]
}

const emptyCowork: Cowork = {
   name: '',
   role: '',
   tag: '',
   opinion: '',
   link: '',
   image: '',
}

const ItemDetails = ({
   children,
   title,
   logo,
   shortName,
   role,
   date,
   isPresent,
   jobDesc,
   coworks,
}: ItemDetailsProps) => {
   const isMobile = useIsMobile()
   const [selectedProfile, setSelectedProfile] = useState<Cowork>(emptyCowork)
   const [isSelected, setIsSelected] = useState(false)

   const handleSelectProfile = (data: Cowork) => {
      setSelectedProfile(data)
      setIsSelected(true)
   }

   const handleCaseButton = () => {
      setIsSelected(false)
   }

   const content = (
      <div className="flex h-full flex-col justify-between gap-4 p-4">
         {isSelected ? (
            <Users
               link={selectedProfile.link}
               name={selectedProfile.name}
               tag={selectedProfile.tag}
               role={selectedProfile.role}
               opinion={selectedProfile.opinion}
            />
         ) : (
            <div className="flex flex-col gap-4">
               <div className="flex items-start gap-3 border-2 border-mainDark bg-bg p-3 dark:border-darkBorder dark:bg-darkBg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-mainDark bg-main dark:border-darkBorder dark:bg-secondaryBlack">
                     {logo ? (
                        <Image
                           src={logo}
                           alt={title}
                           width={32}
                           height={32}
                           className="h-8 w-8 object-contain"
                        />
                     ) : (
                        <span className="font-lexend text-[10px] font-black">{shortName}</span>
                     )}
                  </span>

                  <div className="min-w-0">
                     <h3 className="font-lexend text-base font-bold leading-snug">{title}</h3>
                     <p className="font-outfit text-sm opacity-80">{role}</p>

                     <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        <span className="border-2 border-mainDark px-2 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder">
                           {date}
                        </span>
                        {isPresent && (
                           <span className="border-2 border-mainDark bg-[#8ad451] px-2 py-0.5 font-outfit text-[10px] font-black uppercase tracking-[0.1em] text-mainDark dark:border-darkBorder">
                              Present
                           </span>
                        )}
                     </div>
                  </div>
               </div>

               <p className="font-outfit text-sm leading-relaxed opacity-90">{jobDesc}</p>
            </div>
         )}

         <TabSelect
            handleCaseButton={handleCaseButton}
            handleSelectProfile={handleSelectProfile}
            coworks={coworks}
            isSelected={isSelected}
         />
      </div>
   )

   if (isMobile) {
      return (
         <Drawer>
            <DrawerTrigger className="w-full text-left">{children}</DrawerTrigger>
            <DrawerContent className="max-h-[85vh] overflow-y-auto rounded-none border-2 border-mainDark bg-main dark:border-darkBorder dark:bg-secondaryBlack">
               {content}
            </DrawerContent>
         </Drawer>
      )
   }

   return (
      <Dialog>
         <DialogTrigger className="w-full text-left">{children}</DialogTrigger>
         <DialogContent className="max-h-[85vh] min-h-0 overflow-y-auto rounded-none border-2 border-mainDark bg-main shadow-[6px_6px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack">
            <DialogTitle className="sr-only">{title}</DialogTitle>
            <DialogDescription className="sr-only">{role}</DialogDescription>
            {content}
         </DialogContent>
      </Dialog>
   )
}

export default ItemDetails
