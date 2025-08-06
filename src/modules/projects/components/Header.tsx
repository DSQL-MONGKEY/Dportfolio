import { LucideSquareSigma } from 'lucide-react'
import React from 'react'

const Header = () => {
   return (
      <div className="mb-5">
         <div className="flex gap-1 space-y-2">
            <LucideSquareSigma className="h-10 w-10"/>
            <h2 className="text-3xl font-lexend text-neutral-900 dark:text-slate-200">Projects</h2>
         </div>
         <p className="font-outfit text-md text-neutral-700 dark:text-slate-300">
            Rather than “projects”, these are stories that I built. Every single one of them is the result of crazy ideas, sweat, and endless innovation. This is not just a list, but a tangible proof of my journey and all that I&apos;ve accomplished.
         </p>
      </div>
   )
}

export default Header