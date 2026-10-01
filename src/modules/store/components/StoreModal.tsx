"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/common/lib/utils'
import { formatStorePrice, StoreCurrency, StoreProduct } from '@/common/constants/store'

interface StoreModalProps {
   product: StoreProduct | null
   currency: StoreCurrency
   onClose: () => void
}

const StoreModal = ({ product, currency, onClose }: StoreModalProps) => {
   if (!product) return null

   return (
      <Dialog
         open
         onOpenChange={(open) => {
            if (!open) onClose()
         }}
      >
         <DialogContent className="max-h-[85vh] min-h-0 overflow-y-auto rounded-none border-2 border-mainDark bg-main p-5 shadow-[6px_6px_0px_0px_var(--neo-shadow-color)] dark:border-darkBorder dark:bg-secondaryBlack">
            <DialogTitle className="sr-only">{product.name}</DialogTitle>
            <DialogDescription className="sr-only">{product.description}</DialogDescription>

            <div className="flex flex-wrap items-center gap-2">
               <span
                  className="border-2 border-mainDark px-2 py-0.5 font-lexend text-[10px] font-black uppercase tracking-[0.15em] text-mainDark dark:border-mainDark"
                  style={{ backgroundColor: product.accent }}
               >
                  {product.badge ?? 'Digital product'}
               </span>
               <span className="border-2 border-mainDark bg-bg px-2 py-0.5 font-outfit text-[11px] font-bold dark:border-darkBorder dark:bg-darkBg">
                  from {formatStorePrice(product.price, currency)}
               </span>
            </div>

            <h3 className="mt-3 font-lexend text-lg font-bold leading-snug">{product.name}</h3>
            <p className="mt-2 font-outfit text-sm leading-relaxed opacity-80">
               {product.description}
            </p>

            <ul className="mt-4 flex flex-col gap-2">
               {product.features.map((feature) => (
                  <li
                     key={feature}
                     className="flex items-start gap-2 font-outfit text-xs leading-relaxed"
                  >
                     <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border-2 border-mainDark bg-[#8ad451] text-mainDark dark:border-mainDark">
                        <Check size={10} strokeWidth={3} />
                     </span>
                     <span className="opacity-80">{feature}</span>
                  </li>
               ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
               <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 border-2 border-mainDark bg-shineRed px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark transition-transform hover:-translate-y-0.5 dark:border-mainDark"
               >
                  Order this <ArrowUpRight size={14} />
               </Link>

               {product.previewUrl ? (
                  <a
                     href={product.previewUrl}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 border-2 border-mainDark bg-main px-4 py-2 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
                  >
                     Live preview <ArrowUpRight size={14} />
                  </a>
               ) : (
                  <span
                     className="inline-flex items-center gap-2 border-2 border-mainDark bg-bg px-4 py-2 font-outfit text-xs font-bold opacity-50 dark:border-darkBorder dark:bg-darkBg"
                     title="Preview link coming soon"
                  >
                     Preview soon
                  </span>
               )}
            </div>

            <p className="mt-4 font-outfit text-[11px] opacity-50">
               Placeholder pricing — final quote is confirmed after we talk about your content and
               deadline.
               {currency === 'USD' && ' USD prices are converted from IDR at a fixed rate.'}
            </p>
         </DialogContent>
      </Dialog>
   )
}

export default StoreModal
