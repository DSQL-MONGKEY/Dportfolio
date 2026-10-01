import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Certifications from './Certifications'
import Education from './Education'
import ExperienceSnapshot from './ExperienceSnapshot'
import FocusAreas from './FocusAreas'
import Header from './Header'
import Skills from './Skills'

const About = () => {
   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <Header />

         <FocusAreas />

         <ExperienceSnapshot />

         <Education />

         <Certifications />

         <Skills />

         <section>
            <div className="flex flex-wrap items-center justify-between gap-4 border-2 border-mainDark bg-[#B983FF] p-4 shadow-[4px_4px_0px_0px_var(--neo-shadow-color)] dark:border-mainDark">
               <div>
                  <p className="font-lexend text-sm font-black uppercase tracking-[0.15em] text-mainDark">
                     Want to work together?
                  </p>
                  <p className="mt-1 font-outfit text-xs font-bold text-mainDark/80">
                     I am open for freelance projects, roles, and collaborations.
                  </p>
               </div>

               <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-mainDark bg-mainDark px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-main transition-all hover:-translate-y-0.5 dark:border-darkBorder"
               >
                  Get in touch <ArrowUpRight size={14} />
               </Link>
            </div>
         </section>
      </div>
   )
}

export default About
