import React from 'react'
import { storeSteps } from '@/common/constants/store'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'

const StoreSteps = () => {
   return (
      <section>
         <NeoSectionHeading
            title="How it works"
            description="Three steps from idea to a link you can share."
            badge="fast turnaround"
            badgeClassName="bg-[#8ad451]"
         />

         <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {storeSteps.map((step, index) => (
               <div
                  key={step.title}
                  className="border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack"
                  style={{ boxShadow: '4px 4px 0px 0px var(--neo-shadow-color)' }}
               >
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-mainDark bg-[#F4CE14] font-lexend text-lg font-black text-mainDark dark:border-mainDark">
                     {index + 1}
                  </span>
                  <h3 className="mt-3 font-lexend text-sm font-bold">{step.title}</h3>
                  <p className="mt-1 font-outfit text-xs leading-relaxed opacity-70">
                     {step.description}
                  </p>
               </div>
            ))}
         </div>
      </section>
   )
}

export default StoreSteps
