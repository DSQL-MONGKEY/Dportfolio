"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '@/common/lib/utils'
import {
   storeCategories,
   storeProducts,
   StoreCategoryId,
   StoreCurrency,
   StoreProduct,
} from '@/common/constants/store'
import ProductCard from './ProductCard'
import StoreFaq from './StoreFaq'
import StoreModal from './StoreModal'
import StoreSteps from './StoreSteps'

const currencies: StoreCurrency[] = ['IDR', 'USD']

const Store = () => {
   const [category, setCategory] = useState<StoreCategoryId | 'all'>('all')
   const [currency, setCurrency] = useState<StoreCurrency>('IDR')
   const [selected, setSelected] = useState<StoreProduct | null>(null)

   const filtered =
      category === 'all'
         ? storeProducts
         : storeProducts.filter((product) => product.category === category)

   const counts: Record<string, number> = {
      all: storeProducts.length,
      ...Object.fromEntries(
         storeCategories.map((item) => [
            item.id,
            storeProducts.filter((product) => product.category === item.id).length,
         ])
      ),
   }

   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <section data-aos="fade-up">
            <div className="flex flex-wrap items-center gap-3">
               <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">Store</h1>
               <span className="border-2 border-mainDark bg-[#F4CE14] px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-mainDark">
                  digital products
               </span>
               <span className="border-2 border-mainDark bg-main px-2 py-0.5 font-outfit text-xs font-bold dark:border-darkBorder dark:bg-secondaryBlack">
                  {currency} pricing
               </span>
            </div>

            <p className="mt-2 max-w-xl font-outfit text-sm opacity-70">
               Templates and custom builds to launch something fast — greeting pages, landing
               pages, wedding and birthday invitations, all built with the same care as my client
               projects.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
               <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-mainDark bg-shineRed px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-mainDark shadow-[3px_3px_0px_0px_var(--neo-shadow-color)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--neo-shadow-color)] dark:border-mainDark"
               >
                  Ask about custom <ArrowUpRight size={14} />
               </Link>

               <a
                  href="#products"
                  className="flex items-center gap-2 border-2 border-mainDark bg-main px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] shadow-[3px_3px_0px_0px_var(--neo-shadow-color)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--neo-shadow-color)] dark:border-darkBorder dark:bg-secondaryBlack"
               >
                  <Sparkles size={14} /> Browse products
               </a>
            </div>
         </section>

         <section id="products" className="scroll-mt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
               <div className="flex flex-wrap gap-2">
                  <button
                     type="button"
                     onClick={() => setCategory('all')}
                     aria-pressed={category === 'all'}
                     className={cn(
                        'border-2 border-mainDark px-3 py-1.5 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
                        category === 'all'
                           ? 'bg-mainDark text-main dark:border-mainDark dark:bg-darkText dark:text-mainDark'
                           : 'bg-bg dark:bg-darkBg'
                     )}
                  >
                     All <span className="opacity-60">{counts.all}</span>
                  </button>

                  {storeCategories.map((item) => (
                     <button
                        key={item.id}
                        type="button"
                        onClick={() => setCategory(item.id)}
                        aria-pressed={category === item.id}
                        className={cn(
                           'border-2 border-mainDark px-3 py-1.5 font-outfit text-xs font-bold transition-transform hover:-translate-y-0.5 dark:border-darkBorder',
                           category === item.id
                              ? 'text-mainDark dark:border-mainDark'
                              : 'bg-bg dark:bg-darkBg'
                        )}
                        style={category === item.id ? { backgroundColor: item.accent } : undefined}
                     >
                        {item.label} <span className="opacity-60">{counts[item.id] ?? 0}</span>
                     </button>
                  ))}
               </div>

               <div
                  className="flex items-center gap-1 border-2 border-mainDark bg-main p-1 dark:border-darkBorder dark:bg-secondaryBlack"
                  role="group"
                  aria-label="Currency"
               >
                  {currencies.map((item) => (
                     <button
                        key={item}
                        type="button"
                        onClick={() => setCurrency(item)}
                        aria-pressed={currency === item}
                        className={cn(
                           'px-2.5 py-1 font-lexend text-[11px] font-black uppercase tracking-[0.15em] transition-colors',
                           currency === item
                              ? 'bg-[#F4CE14] text-mainDark'
                              : 'text-text opacity-60 hover:opacity-100 dark:text-darkText'
                        )}
                     >
                        {item}
                     </button>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
               {filtered.map((product, index) => (
                  <ProductCard
                     key={product.id}
                     product={product}
                     index={index}
                     currency={currency}
                     onOpen={setSelected}
                  />
               ))}
            </div>

            <p className="text-center font-outfit text-[11px] opacity-50">
               Prices are placeholders and confirmed after a quick chat about your content and
               deadline.
               {currency === 'USD' && ' USD prices are converted from IDR at a fixed rate.'}
            </p>
         </section>

         <StoreSteps />

         <StoreFaq />

         <section data-aos="fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4 border-2 border-mainDark bg-[#B983FF] p-4 shadow-[4px_4px_0px_0px_var(--neo-shadow-color)] dark:border-mainDark">
               <div>
                  <p className="font-lexend text-sm font-black uppercase tracking-[0.15em] text-mainDark">
                     Have a different idea?
                  </p>
                  <p className="mt-1 font-outfit text-xs font-bold text-mainDark/80">
                     Tell me what you want to build and I will shape the scope with you.
                  </p>
               </div>

               <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-mainDark bg-mainDark px-4 py-2 font-lexend text-xs font-black uppercase tracking-[0.1em] text-main transition-all hover:-translate-y-0.5 dark:border-darkBorder"
               >
                  Start a project <ArrowUpRight size={14} />
               </Link>
            </div>
         </section>

         <StoreModal product={selected} currency={currency} onClose={() => setSelected(null)} />
      </div>
   )
}

export default Store
