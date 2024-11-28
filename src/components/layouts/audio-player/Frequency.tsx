"use client";

import React, { useEffect,  forwardRef } from "react";
import { motion } from "framer-motion";

interface FrequencyProps {
   audioData: number[]
   className: string
}

const Frequency = forwardRef(
   ({ audioData, className='' }: FrequencyProps,  refs) => {
   const { animationIdRef, audioContextRef, sourceRef } = refs;
   
   useEffect(() => {

      // Clean up on unmount
      return () => {
         if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
         if (audioContextRef.current) {
         // Disconnect and close audio context to prevent memory leaks
            if (sourceRef.current) {
               sourceRef.current.disconnect();
            }
         audioContextRef.current?.close();
         }
      };
   }, [animationIdRef, audioContextRef, sourceRef]);

   return (
      <div className={`flex items-end ${className}`}>
         {audioData.map((height, index) => (
            <motion.div
               key={index}
               className="dark:bg-slate-300 w-2 mx-0.5 rounded-2xl border border-black"
               animate={{
                  height: `${height - 100}px`, 
                  backgroundColor: height > 200 ? "#F55353" : "#EFECEC",
               }}
               transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
               }}
            />
         ))}
      </div>
   );
})

Frequency.displayName = "Frequency";

export default Frequency;
