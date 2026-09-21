import React from 'react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { contactSteps } from '@/common/constants/contact'

const Steps = () => {
   return (
      <section>
         <NeoSectionHeading
            title="What happens next"
            description="No black box — here is the whole process."
            badge="~24h reply"
            badgeClassName="bg-[#8ad451]"
         />

         <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {contactSteps.map((step, index) => (
               <div
                  key={step.title}
                  className="border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <span
                     className="flex h-10 w-10 items-center justify-center border-2 border-mainDark font-lexend text-lg font-black text-mainDark dark:border-darkBorder"
                     style={{ backgroundColor: step.accent }}
                  >
                     {index + 1}
                  </span>

                  <h3 className="mt-3 font-lexend text-sm font-bold">{step.title}</h3>
                  <p className="mt-1 font-outfit text-xs opacity-70">{step.description}</p>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Steps
