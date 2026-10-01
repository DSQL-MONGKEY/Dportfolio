"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import { formatStorePrice, StoreCurrency, StoreProduct } from '@/common/constants/store'

interface ProductCardProps {
   product: StoreProduct
   index: number
   currency: StoreCurrency
   onOpen: (product: StoreProduct) => void
}

const ProductCard = ({ product, index, currency, onOpen }: ProductCardProps) => {
   const featured = index % 2 === 0

   return (
      <article
         data-aos="fade-up"
         data-aos-delay={index * 60}
         className={cn(
            'group flex h-full flex-col border-2 border-mainDark bg-main p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack md:p-5',
            featured
               ? 'shadow-[4px_4px_0px_0px_#F4CE14]'
               : 'shadow-[4px_4px_0px_0px_#25F4EE]'
         )}
      >
         <div className="flex items-center justify-between gap-2">
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

         <h3 className="mt-3 font-lexend text-base font-bold leading-snug md:text-lg">
            {product.name}
         </h3>
         <p className="mt-1.5 flex-1 font-outfit text-sm leading-relaxed opacity-75">
            {product.description}
         </p>

         <ul className="mt-3 flex flex-col gap-1.5">
            {product.features.slice(0, 3).map((feature) => (
               <li
                  key={feature}
                  className="flex items-start gap-2 font-outfit text-xs leading-relaxed"
               >
                  <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center border-2 border-mainDark bg-[#8ad451] text-mainDark dark:border-mainDark">
                     <Check size={8} strokeWidth={3} />
                  </span>
                  <span className="opacity-80">{feature}</span>
               </li>
            ))}
         </ul>

         <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
               type="button"
               onClick={() => onOpen(product)}
               className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-mainDark px-3 py-1.5 font-outfit text-xs font-bold text-main transition-transform hover:-translate-y-0.5 dark:border-mainDark dark:bg-darkText dark:text-mainDark"
            >
               Quick view
            </button>

            <Link
               href={`/contact?product=${encodeURIComponent(product.name)}`}
               className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-shineRed px-3 py-1.5 font-outfit text-xs font-bold text-mainDark transition-transform hover:-translate-y-0.5 dark:border-mainDark"
            >
               Order <ArrowUpRight size={12} />
            </Link>

            {product.previewUrl ? (
               <a
                  href={product.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-2 border-mainDark bg-main px-3 py-1.5 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  Preview <ArrowUpRight size={12} />
               </a>
            ) : (
               <span className="inline-flex items-center border-2 border-mainDark bg-bg px-3 py-1.5 font-outfit text-xs font-bold opacity-50 dark:border-darkBorder dark:bg-darkBg">
                  Preview soon
               </span>
            )}
         </div>
      </article>
   )
}

export default ProductCard
