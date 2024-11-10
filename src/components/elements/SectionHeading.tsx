import React, { ReactNode } from 'react'

interface SectionHeadingProps {
   title: string,
   icon?: ReactNode,
   className?: string
}

const SectionHeading = ({ title, icon, className = '' }: SectionHeadingProps) => {
   return (
      <div className={`flex items-center gap-1 text-xl font-lexend text-neutral-700 dark:text-white ${className}`}>
         {icon && <>{icon}</>}
         <h2 className="capitalize">
            {title}
         </h2>
      </div>
   )
}

export default SectionHeading