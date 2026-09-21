"use client"

import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { CONTACT_EMAIL } from '@/common/constants/contact'

const CopyEmailButton = () => {
   const [copied, setCopied] = useState(false)

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(CONTACT_EMAIL)
         setCopied(true)
         setTimeout(() => setCopied(false), 2000)
      } catch {
         // clipboard unavailable
      }
   }

   return (
      <button
         type="button"
         onClick={handleCopy}
         className="flex items-center gap-2 border-2 border-mainDark bg-main px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-text shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText"
      >
         {copied ? <Check size={16} /> : <Copy size={16} />}
         {copied ? 'Copied!' : 'Copy email'}
      </button>
   )
}

export default CopyEmailButton
