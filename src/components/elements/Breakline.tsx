import React from 'react'
interface BreaklineProps {
   className?: string,
   [propName: string]: string | undefined
}

const Breakline = ({ className = '', ...others }: BreaklineProps) => {
   return (
      <div
         className={`border-t border-gray-700 dark:border-gray-300 my-4 ${className}`}
         {...others}
      ></div>
   )
}

export default Breakline