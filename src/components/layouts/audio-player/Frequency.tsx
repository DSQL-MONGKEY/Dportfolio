"use client";

import React, { useEffect, RefObject } from "react";
import { motion } from "framer-motion";

/**
 * Created a custom ref of instead using forwardRef
 * that can't passing multiple refs, it improves readability,
 * simplifies code, and avoid many code issues
 * 
 * NOTE: use forwardRef only for necessary in specific scenarios
 */
interface FrequencyProps {
   audioData: number[]
   className: string
   animationIdRef: RefObject<number | null>
   audioContextRef: RefObject<AudioContext | null>
   sourceRef: RefObject<MediaElementAudioSourceNode>  
}



const Frequency = ({ 
   audioData, 
   className = '', 
   animationIdRef, 
   audioContextRef, 
   sourceRef }: FrequencyProps) => {
   
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
}

Frequency.displayName = "Frequency";

export default Frequency;
