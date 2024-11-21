import { cn } from '@/common/lib/utils'
import React, { ReactNode } from 'react'

interface BentoCardProps {
   children: ReactNode,
   className?: string
}

const BentoCard = ({ children, className = '' }: BentoCardProps) => {
   return (
      <div className={cn(`relative h-full w-full overflow-hidden rounded-2xl p-4 ${className}` )}>
         {children}
      </div>
   )
}

export default BentoCard