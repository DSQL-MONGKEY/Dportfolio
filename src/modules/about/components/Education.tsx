import React from 'react'
import { GraduationCap, Trophy } from 'lucide-react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { achievements, education } from '@/common/constants/about'

const Education = () => {
   return (
      <section>
         <NeoSectionHeading
            title="Education & Achievements"
            description="Degrees, scholarships, and things I am proud of."
            badge="academics"
            badgeClassName="bg-[#8ad451]"
         />

         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
               {education.map((item) => (
                  <div
                     key={`${item.degree}-${item.period}`}
                     className="border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack"
                     style={{ boxShadow: '4px 4px 0px 0px #25F4EE' }}
                  >
                     <span className="flex h-10 w-10 items-center justify-center border-2 border-mainDark bg-[#25F4EE] text-mainDark dark:border-mainDark">
                        <GraduationCap size={18} />
                     </span>
                     <h3 className="mt-3 font-lexend text-sm font-bold">{item.degree}</h3>
                     <p className="mt-1 font-outfit text-xs opacity-70">{item.school}</p>
                     <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[10px] font-bold dark:border-darkBorder dark:bg-darkBg">
                           {item.period}
                        </span>
                        <span className="border-2 border-mainDark bg-[#F4CE14] px-2 py-0.5 font-outfit text-[10px] font-bold text-mainDark dark:border-mainDark">
                           GPA {item.gpa}
                        </span>
                     </div>
                     <ul className="mt-3 flex flex-col gap-1.5">
                        {item.notes.map((note) => (
                           <li
                              key={note}
                              className="font-outfit text-xs leading-relaxed opacity-75"
                           >
                              • {note}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <div
               className="border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack"
               style={{ boxShadow: '4px 4px 0px 0px #F4CE14' }}
            >
               <span className="flex h-10 w-10 items-center justify-center border-2 border-mainDark bg-[#F4CE14] text-mainDark dark:border-mainDark">
                  <Trophy size={18} />
               </span>
               <h3 className="mt-3 font-lexend text-sm font-bold">Highlights</h3>

               <ul className="mt-3 flex flex-col gap-2">
                  {achievements.map((achievement) => (
                     <li
                        key={achievement}
                        className="flex items-start gap-2 font-outfit text-xs leading-relaxed"
                     >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mainDark dark:bg-darkText" />
                        <span className="opacity-80">{achievement}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Education
