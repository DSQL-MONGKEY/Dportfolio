import React from 'react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { skillGroups } from '@/common/constants/about'

const Skills = () => {
   return (
      <section>
         <NeoSectionHeading
            title="Technical Skills"
            description="The tools and technologies I reach for, grouped by lane."
            badge="stack"
            badgeClassName="bg-[#25F4EE]"
         />

         <div className="flex flex-col gap-4">
            {skillGroups.map((group) => (
               <div
                  key={group.label}
                  className="border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <h3 className="font-lexend text-xs font-black uppercase tracking-[0.15em] opacity-60">
                     {group.label}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                     {group.items.map((item) => (
                        <span
                           key={item}
                           className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[11px] font-bold dark:border-darkBorder dark:bg-darkBg"
                        >
                           {item}
                        </span>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Skills
