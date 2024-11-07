import { MenuItemProps } from '@/common/types/menu';
import { FaLink } from "react-icons/fa6";
import { useMenu } from '@/stores/menu';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import React, { useState } from 'react'

const MenuItem = ({ href, title, icon, className = '', children, isHover, onClick }: MenuItemProps) => {
   const [isHovered, setIsHovered] = useState(false);
   const { hideMenu } = useMenu();
   const isExternalUrl = href?.includes('http')
   const pathname = usePathname()
  const url = new URL(href, 'http://localhost:3000')

   const activeClasses = `flex ${
      !isHover ? 'justify-center px-4 py-2 rounded-lg lg:rounded-full lg:p-2' : 'lg:rounded-lg lg:py-2 lg:px-4'
   } gap-2 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 ${
      pathname === url.pathname
      ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-300'
      : 'hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-100 hover:lg:rounded-lg lg:hover:gap-3 lg:transition-all lg:duration-300'
   }`

   
   const handleMouseEnter = () => {
      setIsHovered(true)
   }

   const handleMouseLeave = () => {
      setIsHovered(false)
   }

   const handleClick = () => {
      hideMenu()
      if (onClick) onClick()
   }

   const elementProps = {
      className: `${className} ${activeClasses}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick
   }

   const itemComponent = () => {
      console.log(isHover)
      return (
         <div {...elementProps}>
            <div>{icon}</div>
            {isHover && 
               <div className="ml-1 animate-enter-left whitespace-nowrap text-sm">
                  {title}
               </div>
            }
               <div className="flex-grow lg:hidden">{title}</div>
            {children && <>{children}</>}
            {isExternalUrl && isHovered && (
               <FaLink size={22} className="-rotate-45 text-gray-500 lg:transition-all lg:duration-300" />
            )}
         </div>
      )
   }

   return (
      <Link 
         aria-label={title} 
         tabIndex={0} href={href} 
         target={isExternalUrl ? '_blank' : ''} 
         onClick={handleClick}>
         {itemComponent()}
      </Link>
   )
}

export default MenuItem