import React, { ReactNode } from 'react'

interface SectionSubHeadingProps {
   children: ReactNode,
   className?: string
}

const SectionSubHeading = ({ children, className }: SectionSubHeadingProps) => {
   return (
      <div className={`flex flex-col md:flex-row lg:items-center text-md text-neutral-700 dark:text-slate-300 font-outfit ${className}`}>
         {children}
      </div>
   )
}

export default SectionSubHeading