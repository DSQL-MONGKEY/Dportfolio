import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/common/lib/utils'

interface FavoriteBadgeProps {
   className?: string
   label?: string
}

const FavoriteBadge = ({ className, label = 'Favorite' }: FavoriteBadgeProps) => {
   return (
      <span
         className={cn(
            'inline-flex shrink-0 items-center gap-1 border-2 border-mainDark bg-[#F4CE14] px-1.5 py-0.5 font-lexend text-[9px] font-black uppercase tracking-[0.1em] text-mainDark dark:border-darkBorder',
            className
         )}
      >
         <Star size={9} fill="currentColor" />
         {label}
      </span>
   )
}

export default FavoriteBadge
