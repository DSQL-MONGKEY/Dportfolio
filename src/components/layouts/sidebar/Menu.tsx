"use client"

import { MenuItemProps } from '@/common/types/menu'
import React from 'react'
import MenuItem from './MenuItem'

interface MenuProps {
   title?: string,
   list: MenuItemProps[]
}

const Menu = ({ title, list }: MenuProps) => {
   return (
      <div className="flex flex-col space-y-2 lg:p-0">

         {/* Render option when list have undefined */}
         {title && (
            <div className="mb-2 ml-2 mt-1 hidden text-sm text-neutral-600  dark:text-neutral-500 lg:block">
               {title}
            </div>
         )}

         {/* Optional Chaining for mitigate empty/undefine values from the list */}
         {list?.map((item: MenuItemProps, index: number) => <MenuItem key={index} {...item} />)}
      </div>
   )
}

export default Menu