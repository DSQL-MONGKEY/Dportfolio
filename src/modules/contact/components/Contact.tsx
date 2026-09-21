import React from 'react'
import { Mail } from 'lucide-react'
import { BsLinkedin } from 'react-icons/bs'
import Marquee from '@/components/ui/Marquee'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { LINKEDIN, contactTemplates } from '@/common/constants/contact'
import { buildMailto } from '@/common/lib/contact'
import ContactChannels from './ContactChannels'
import ContactForm from './ContactForm'
import CopyEmailButton from './CopyEmailButton'
import QuickTemplates from './QuickTemplates'
import ServicesCTA from './ServicesCTA'
import Steps from './Steps'

const defaultTemplate = {
   subject: contactTemplates[0].subject,
   body: contactTemplates[0].body,
}

const bannerItems = [
   'Open for freelance',
   'Website',
   'Mobile',
   'IoT',
   'Software testing',
   "Let's talk",
]

const Contact = () => {
   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <section>
            <div className="flex flex-wrap items-center gap-3">
               <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">
                  Get in Touch
               </h1>
               <span className="border-2 border-mainDark bg-lightGreen px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
                  open for freelance
               </span>
            </div>

            <p className="mt-2 max-w-xl font-outfit text-sm opacity-70">
               Have a project, a role, or just a question? Send the brief — it lands straight in my
               inbox, already formatted.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
               <a
                  href={buildMailto(defaultTemplate)}
                  className="flex items-center gap-2 border-2 border-mainDark bg-shineRed px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:border-darkBorder"
               >
                  <Mail size={16} /> Email me
               </a>

               <a
                  href={LINKEDIN.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border-2 border-mainDark bg-[#0A66C2] px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-main shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:border-darkBorder"
               >
                  <BsLinkedin size={14} /> LinkedIn
               </a>

               <CopyEmailButton />
            </div>
         </section>

         <Marquee
            key="contact-banner"
            className="border-2 border-mainDark bg-[#F4CE14] py-2 [--duration:20s] dark:border-darkBorder"
         >
            {bannerItems.map((item) => (
               <span
                  key={item}
                  className="whitespace-nowrap px-3 font-lexend text-xs font-black uppercase tracking-[0.2em] text-mainDark"
               >
                  {item} ✦
               </span>
            ))}
         </Marquee>

         <QuickTemplates />

         <section>
            <NeoSectionHeading
               title="Or write your own brief"
               description="Fill this in and your email app opens with everything formatted."
               badge="reply in ~24h"
               badgeClassName="bg-shineRed"
            />
            <ContactForm />
         </section>

         <ServicesCTA />

         <Steps />

         <ContactChannels />
      </div>
   )
}

export default Contact
