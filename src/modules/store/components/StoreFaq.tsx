import React from 'react'
import { storeFaqs } from '@/common/constants/store'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'

const StoreFaq = () => {
   return (
      <section>
         <NeoSectionHeading
            title="FAQ"
            description="Everything buyers usually ask before ordering."
            badge="answers"
            badgeClassName="bg-[#25F4EE]"
         />

         <div className="flex flex-col gap-3">
            {storeFaqs.map((faq) => (
               <details
                  key={faq.q}
                  className="group border-2 border-mainDark bg-main dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 font-lexend text-sm font-bold [&::-webkit-details-marker]:hidden">
                     {faq.q}
                     <span
                        aria-hidden
                        className="text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                     >
                        +
                     </span>
                  </summary>
                  <p className="border-t-2 border-mainDark px-4 py-3 font-outfit text-sm leading-relaxed opacity-75 dark:border-darkBorder">
                     {faq.a}
                  </p>
               </details>
            ))}
         </div>
      </section>
   )
}

export default StoreFaq
