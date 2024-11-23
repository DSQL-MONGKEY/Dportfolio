"use client";

import React, { useEffect,  forwardRef } from "react";
import { motion } from "framer-motion";

interface FrequencyProps {
   audioData: number[],
}

const Frequency = forwardRef(
   ({ audioData }: FrequencyProps,  refs) => {
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
         audioContextRef.current.close();
         }
      };
   }, []);

   return (
      <div className="">
         
         <div className="flex items-end w-52 h-52">
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
      </div>
   );
})

Frequency.displayName = "Frequency";

export default Frequency;
