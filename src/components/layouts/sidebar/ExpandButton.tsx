import { cn } from '@/common/lib/utils';
import React from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";


interface ExpandButtonProps { 
   isExpanded: boolean;
   setIsExpanded: (isExpanded: boolean) => void;
}

const ExpandButton = ({ isExpanded, setIsExpanded }: ExpandButtonProps) => {
   const handleToggleButton = () => {
      setIsExpanded(!isExpanded);
   }

   return (
      <FaAngleDoubleLeft
         onClick={handleToggleButton}
         className={cn('text-4xl text-neutral-800 dark:text-neutral-200 cursor-pointer transition-all duration-300 outline-8 outline-white', isExpanded ? 'rotate-0' : 'rotate-180')} 
      />
   )
}

export default ExpandButton