
import React, { ReactNode } from 'react'

const IllustrationContainer = ({ children }: { children: ReactNode }) => {
   return (
      <div className="h-36 w-52 overflow-hidden rounded-lg border dark:border-neutral-700">
         <div className="flex justify-center items-center gap-2  p-3 pb-0 dark:bg-neutral-950">
            {children}
         </div>
      </div>
   )
}

export default IllustrationContainer