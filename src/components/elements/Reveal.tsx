import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

import { RevealProps } from "@/common/types/Reveal"

const Reveal = ({ delay, children }: RevealProps) => {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })
   const mainControls = useAnimation()
   const slideControls = useAnimation()

   useEffect(() => {
      if(isInView) {
         mainControls.start("visible")
         slideControls.start("visible")
      }
   }, [isInView, mainControls, slideControls])

   return (
      <div ref={ref} style={{ overflow: "hidden" }} className="relative">
         <motion.div
         variants={{ 
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
         }}
         initial="hidden"
         animate={mainControls}
         transition={{ duration: 0.5, delay: delay ? delay : 0.5 }}
         > 
            {children}
         </motion.div>
         <motion.div
         variants={{ 
            hidden: { left: 0 },
            visible: { left: "100%" }
         }}
         initial="hidden"
         animate={slideControls}
         transition={{ duration: 0.5, ease: 'easeIn', delay: 0.25}}
         style={{ 
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            zIndex: 20,
         }}
         className="bg-slate-200 dark:bg-zinc-700"
         />
      </div>
   )
}

export default Reveal