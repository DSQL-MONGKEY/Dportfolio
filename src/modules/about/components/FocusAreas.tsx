import React from 'react'
import { focusAreas } from '@/common/constants/about'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'

const FocusAreas = () => {
   return (
      <section>
         <NeoSectionHeading
            title="What I do"
            description="Three lanes I work across, often in the same project."
            badge="focus areas"
            badgeClassName="bg-[#25F4EE]"
         />

         <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {focusAreas.map((area) => {
               const Icon = area.icon

               return (
                  <div
                     key={area.title}
                     className="flex flex-col border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack"
                     style={{ boxShadow: `4px 4px 0px 0px ${area.accent}` }}
                  >
                     <span
                        className="flex h-10 w-10 items-center justify-center border-2 border-mainDark text-mainDark dark:border-mainDark"
                        style={{ backgroundColor: area.accent }}
                     >
                        <Icon size={18} />
                     </span>
                     <h3 className="mt-3 font-lexend text-sm font-bold">{area.title}</h3>
                     <p className="mt-1 font-outfit text-xs leading-relaxed opacity-70">
                        {area.description}
                     </p>
                  </div>
               )
            })}
         </div>
      </section>
   )
}

export default FocusAreas
