import React from 'react'
import { Briefcase, FileText, MessageCircle, Users, type LucideIcon } from 'lucide-react'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { cn } from '@/common/lib/utils'
import { contactTemplates } from '@/common/constants/contact'
import { buildMailto } from '@/common/lib/contact'

const icons: Record<string, LucideIcon> = {
   project: FileText,
   hire: Briefcase,
   collab: Users,
   hello: MessageCircle,
}

const QuickTemplates = () => {
   return (
      <section>
         <NeoSectionHeading
            title="Pick a starting point"
            description="Each template opens your email app with the subject and body already written."
            badge="ready to send"
            badgeClassName="bg-[#F4CE14]"
         />

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactTemplates.map((template) => {
               const Icon = icons[template.id] ?? FileText

               return (
                  <a
                     key={template.id}
                     href={buildMailto(template)}
                     className={cn(
                        'group flex flex-col border-2 border-mainDark bg-main p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack',
                        template.shadow
                     )}
                  >
                     <span
                        className="flex h-10 w-10 items-center justify-center border-2 border-mainDark text-mainDark dark:border-darkBorder"
                        style={{ backgroundColor: template.accent }}
                     >
                        <Icon size={18} />
                     </span>

                     <span className="mt-3 font-lexend text-sm font-bold">{template.label}</span>
                     <span className="mt-1 flex-1 font-outfit text-xs opacity-70">
                        {template.description}
                     </span>
                     <span className="mt-3 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2">
                        Use template ↗
                     </span>
                  </a>
               )
            })}
         </div>
      </section>
   )
}

export default QuickTemplates
