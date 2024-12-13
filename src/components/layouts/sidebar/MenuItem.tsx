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

   const activeClasses = `flex 
   ${
      isHover ? 'lg:rounded-lg lg:py-2 lg:px-4 transition-all ease-out' :'justify-center px-4 py-2 rounded-lg lg:p-2'
   } 
      gap-2 text-neutral-900 font-poppins dark:text-neutral-300 hover:text-neutral-950 hover:dark:text-white transition-all ease-out
   ${
      pathname === url.pathname
      ? 'bg-[#8ad451] dark:bg-[#2192FF] dark:!text-white border-2 border-black shadow-light dark:shadow-dark'
      : 'border-2 border-slate-300 hover:border-black dark:border-slate-200 hover:dark:!border-black hover:shadow-light hover:dark:lg:bg-[#2192FF] hover:lg:bg-neutral-100 hover:lg:rounded-lg lg:hover:gap-3 lg:transition-all lg:duration-300'
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
      return (
         <div {...elementProps}>
            
            {/* Sidebar hovered */}
            <div className="text-2xl font-bold">
               {icon}
            </div>

            {isHover && 
               <div className="flex items-center ml-1 animate-enter-left whitespace-nowrap text-sm">
                  {title}
               </div>
            }
            
            {/* when sidebar unhovered */}
            <div className="flex-grow lg:hidden">{title}</div>
            {children && <>{children}</>}

            {/* external link */}
            {isExternalUrl && isHovered && (
               <FaLink size={22} className="-rotate-45 text-gray-500 dark:text-white lg:transition-all lg:duration-300" />
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