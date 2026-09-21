"use client"

import React, { useMemo, useState } from 'react'
import { Check, Copy, Send } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { CONTACT_EMAIL, budgetOptions, serviceOptions, timelineOptions } from '@/common/constants/contact'
import { buildGmailCompose, buildLeadTemplate, buildMailto, LeadFormValues } from '@/common/lib/contact'

const initialValues: LeadFormValues = {
   name: '',
   email: '',
   service: serviceOptions[0],
   budget: '',
   timeline: '',
   message: '',
}

const inputClass =
   'w-full border-2 border-mainDark bg-bg px-3 py-2 font-outfit text-sm text-text outline-none transition-shadow placeholder:opacity-50 focus:shadow-[3px_3px_0px_0px_#000] dark:border-darkBorder dark:bg-darkBg dark:text-darkText'

const labelClass = 'mb-1.5 block font-lexend text-[11px] font-bold uppercase tracking-[0.15em]'

const Chip = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
   <button
      type="button"
      onClick={onClick}
      className={cn(
         'border-2 border-mainDark px-2.5 py-1 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
         active
            ? 'bg-[#F4CE14] text-mainDark shadow-[2px_2px_0px_0px_#000]'
            : 'bg-bg text-text dark:bg-darkBg dark:text-darkText'
      )}
   >
      {label}
   </button>
)

const ContactForm = () => {
   const [values, setValues] = useState(initialValues)
   const [copied, setCopied] = useState(false)
   const [sent, setSent] = useState(false)

   const template = useMemo(() => buildLeadTemplate(values), [values])

   const update = (key: keyof LeadFormValues, value: string) => {
      setValues((prev) => ({ ...prev, [key]: value }))
      setSent(false)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      window.location.href = buildMailto(template)
      setSent(true)
   }

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(CONTACT_EMAIL)
         setCopied(true)
         setTimeout(() => setCopied(false), 2000)
      } catch {
         // clipboard unavailable — the email is visible below the form
      }
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="border-2 border-mainDark bg-main p-4 shadow-[4px_4px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack md:p-5"
      >
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label>
               <span className={labelClass}>Your name</span>
               <input
                  type="text"
                  required
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  placeholder="Jane Doe"
                  className={inputClass}
               />
            </label>

            <label>
               <span className={labelClass}>Your email</span>
               <input
                  type="email"
                  required
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  placeholder="jane@company.com"
                  className={inputClass}
               />
            </label>
         </div>

         <label className="mt-4 block">
            <span className={labelClass}>What do you need?</span>
            <select
               value={values.service}
               onChange={(event) => update('service', event.target.value)}
               className={inputClass}
            >
               {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                     {service}
                  </option>
               ))}
            </select>
         </label>

         <div className="mt-4">
            <span className={labelClass}>Budget range</span>
            <div className="flex flex-wrap gap-2">
               {budgetOptions.map((budget) => (
                  <Chip
                     key={budget}
                     label={budget}
                     active={values.budget === budget}
                     onClick={() => update('budget', values.budget === budget ? '' : budget)}
                  />
               ))}
            </div>
         </div>

         <div className="mt-4">
            <span className={labelClass}>Timeline</span>
            <div className="flex flex-wrap gap-2">
               {timelineOptions.map((timeline) => (
                  <Chip
                     key={timeline}
                     label={timeline}
                     active={values.timeline === timeline}
                     onClick={() => update('timeline', values.timeline === timeline ? '' : timeline)}
                  />
               ))}
            </div>
         </div>

         <label className="mt-4 block">
            <span className={labelClass}>Project details</span>
            <textarea
               required
               rows={5}
               value={values.message}
               onChange={(event) => update('message', event.target.value)}
               placeholder="What are you building, what problem should it solve, any deadline?"
               className={cn(inputClass, 'resize-y')}
            />
         </label>

         <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
               type="submit"
               className="flex items-center gap-2 border-2 border-mainDark bg-shineRed px-5 py-2.5 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:border-darkBorder"
            >
               <Send size={16} /> Send brief
            </button>

            <a
               href={buildGmailCompose(template)}
               target="_blank"
               rel="noreferrer"
               className="border-2 border-mainDark bg-main px-4 py-2.5 font-outfit text-xs font-bold text-text shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText"
            >
               Open in Gmail ↗
            </a>

            <button
               type="button"
               onClick={handleCopy}
               className="flex items-center gap-2 border-2 border-mainDark bg-main px-4 py-2.5 font-outfit text-xs font-bold text-text transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText"
            >
               {copied ? <Check size={14} /> : <Copy size={14} />}
               {copied ? 'Copied!' : 'Copy email'}
            </button>
         </div>

         {sent && (
            <p className="mt-4 border-2 border-mainDark bg-lightGreen px-3 py-2 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
               Your email app should be opening — if nothing happens, use “Open in Gmail” or copy my email
               below.
            </p>
         )}

         <p className="mt-4 font-outfit text-xs opacity-70">
            Prefer to write it yourself? Email me at{' '}
            <a
               href={`mailto:${CONTACT_EMAIL}`}
               className="font-bold underline decoration-2 underline-offset-2"
            >
               {CONTACT_EMAIL}
            </a>
         </p>
      </form>
   )
}

export default ContactForm
