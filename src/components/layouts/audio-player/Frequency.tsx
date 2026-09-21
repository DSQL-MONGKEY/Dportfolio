"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/common/lib/utils";
import { useMusic } from "@/stores/music";

interface FrequencyProps {
   className?: string
}

const Frequency = ({ className }: FrequencyProps) => {
   const audioData = useMusic(state => state.audioData);

   return (
      <div className={cn("flex items-end gap-[3px]", className)}>
         {audioData.map((height, index) => (
            <motion.div
               key={index}
               className={cn(
                  "w-1.5 flex-1 border border-mainDark dark:border-darkBorder",
                  height > 65 ? "bg-shineRed" : "bg-mainDark dark:bg-darkText"
               )}
               animate={{ height: `${Math.max(height, 4)}%` }}
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
