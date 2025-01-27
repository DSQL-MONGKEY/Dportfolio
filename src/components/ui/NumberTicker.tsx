import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '@/common/lib/utils'

interface NumberTickerProps {
   value: number
   direction?: 'up' | 'down'
   delay?: number
   className?: string
}

const NumberTicker = ({
   value ,
   direction = 'up',
   delay = 0,
   className,
}: NumberTickerProps) => {
   const ref = useRef<HTMLSpanElement>(null);
   const motionValue = useMotionValue(direction === 'down' ? value : 0);
   
   const springValue = useSpring(motionValue, {
      damping: 60,
      stiffness: 100,
   })
   const isInView = useInView(ref, {once: true, margin: '0px'});

   useEffect(() => {
      if (isInView) {
         setTimeout(() => {
            motionValue.set(direction === 'down' ? 0 : value)
         }, delay * 1000)
      }
   }, [motionValue, isInView, delay, value, direction])
   
   useEffect(() => {
      springValue.on('change', (latest) => {
         if(ref.current) {
            ref.current.textContent = Intl.NumberFormat('en-US').format(Math.round(latest))
         }
      })
   }, [springValue])

   return (
      <span 
         ref={ref}
         className={cn('inline-block tabular-nums tracking-wider text-neutral-800 dark:text-neutral-200', className)}
      />
   )
}

export default NumberTicker