"use client"

import { MenuItemProps } from '@/common/types/menu'
import React from 'react'
import MenuItem from './MenuItem'

interface MenuProps {
   title?: string,
   list: MenuItemProps[]
}

const Menu = ({ title, list }: MenuProps) => {
   console.log(list)
   return (
      <div className="flex flex-col space-y-1 lg:p-0">
         {title && (
            <div className="mb-2 ml-2 mt-1 hidden text-sm text-neutral-600 dark:text-neutral-500 lg:block">
               {title}
            </div>
         )}
         {list?.map((item: MenuItemProps, index: number) => <MenuItem key={index} {...item} />)}
      </div>
   )
}

export default Menu