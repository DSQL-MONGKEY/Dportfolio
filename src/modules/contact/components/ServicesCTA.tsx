import React from 'react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { cn } from '@/common/lib/utils'
import { services } from '@/common/constants/constants'
import { buildMailto, buildServiceTemplate } from '@/common/lib/contact'

const shadows = [
   'shadow-[4px_4px_0px_0px_#F4CE14]',
   'shadow-[4px_4px_0px_0px_#25F4EE]',
   'shadow-[4px_4px_0px_0px_#8ad451]',
   'shadow-[4px_4px_0px_0px_#E1306C]',
]

const ServicesCTA = () => {
   return (
      <section>
         <NeoSectionHeading
            title="What I can help with"
            description="Pick a service and the email opens with a matching template."
            badge="services"
            badgeClassName="bg-[#25F4EE]"
         />

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
               <div
                  key={service.id}
                  className={cn(
                     'flex flex-col border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack',
                     shadows[index % shadows.length]
                  )}
               >
                  <div className="flex items-start justify-between gap-3">
                     <span className="text-2xl text-text dark:text-darkText">{service.icon}</span>
                     <span className="font-lexend text-xs font-black uppercase tracking-[0.15em] opacity-50">
                        {String(index + 1).padStart(2, '0')}
                     </span>
                  </div>

                  <h3 className="mt-3 font-lexend text-sm font-bold">{service.title}</h3>
                  <p className="mt-1 flex-1 font-outfit text-xs opacity-70">{service.description}</p>

                  <a
                     href={buildMailto(buildServiceTemplate(service.title))}
                     className="mt-4 inline-block border-2 border-mainDark bg-mainDark px-3 py-1.5 text-center font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-darkText dark:text-mainDark"
                  >
                     Start a project ↗
                  </a>
               </div>
            ))}
         </div>
      </section>
   )
}

export default ServicesCTA
