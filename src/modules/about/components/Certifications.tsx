import React from 'react'
import Image from 'next/image'
import { Award, ArrowUpRight } from 'lucide-react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { certificates } from '@/common/constants/constants'

const Certifications = () => {
   return (
      <section>
         <NeoSectionHeading
            title="Certifications"
            description="Courses and professional certifications I have completed."
            badge={`${certificates.length} credentials`}
            badgeClassName="bg-[#E1306C] text-main dark:text-main"
         />

         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((item) => (
               <div
                  key={`${item.title}-${item.date}`}
                  className="flex flex-col border-2 border-mainDark bg-main p-3 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <div className="flex items-start gap-3">
                     <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg">
                        {item.image ? (
                           <Image
                              src={item.image}
                              alt={item.title}
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                           />
                        ) : (
                           <Award size={18} />
                        )}
                     </span>

                     <div className="min-w-0">
                        <h3 className="font-lexend text-xs font-bold leading-snug">{item.title}</h3>
                        <p className="mt-0.5 font-outfit text-[11px] opacity-70">
                           {item.institution}
                        </p>
                        <span className="mt-1 inline-block border-2 border-mainDark bg-bg px-1.5 py-0.5 font-outfit text-[9px] font-bold dark:border-darkBorder dark:bg-darkBg">
                           {item.date}
                        </span>
                     </div>
                  </div>

                  {item.link && (
                     <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex w-fit items-center gap-1 font-outfit text-[10px] font-bold underline decoration-2 underline-offset-2"
                     >
                        Credential <ArrowUpRight size={10} />
                     </a>
                  )}
               </div>
            ))}
         </div>
      </section>
   )
}

export default Certifications
