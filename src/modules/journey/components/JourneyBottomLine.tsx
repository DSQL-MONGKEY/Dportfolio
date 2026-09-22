import React from 'react'
import { Rocket } from 'lucide-react'

const JourneyBottomLine = () => {
   return (
      <div className="mt-12 md:mt-16">
         <div className="border-2 border-mainDark bg-main p-4 text-center shadow-[4px_4px_0px_0px_#F4CE14] dark:border-darkBorder dark:bg-secondaryBlack">
            <div className="flex flex-wrap items-center justify-center gap-2">
               <span className="font-lexend text-base font-bold">Freelance</span>
               <span className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg">
                  2023 – now
               </span>
            </div>
            <p className="mt-1 font-outfit text-xs opacity-70">Software / IoT Developer</p>
            <p className="mt-2 font-outfit text-xs italic opacity-60">
               Honorary title — glorified Google-fu practitioner, OpenRouter free-model
               malpractitioner.
            </p>
         </div>

         <p className="mx-auto mt-6 max-w-md text-center font-outfit text-sm opacity-70">
            And that&apos;s my journey so far! I&apos;m excited to see where it takes me next
            <Rocket className="ml-1 inline-block" size={14} />
         </p>
      </div>
   )
}

export default JourneyBottomLine
