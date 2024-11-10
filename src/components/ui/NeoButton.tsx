import React, { ReactNode } from 'react'

interface ButtonProps {
   children: ReactNode,
   className?: string,
   [propName: string]:ReactNode | string | undefined
}

const NeoButton = ({ children, className = '', ...others }: ButtonProps) => {
   return (
      <button 
         className={`rounded-md bg-black `}
         {...others}
      >
         <span className={`block -translate-x-2 -translate-y-2 rounded-md border-2 border-black bg-yellow-500 dark:bg-cyan-500 p-4 text-2xl hover:-translate-y-3 active:translate-x-0 active:translate-y-0 transition-all ease-in-out duration-100 ${className}`}>
            {children}
         </span>
      </button>
   )
}

export default NeoButton