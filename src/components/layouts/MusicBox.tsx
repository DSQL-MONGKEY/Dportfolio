import { musicPlaylist } from '@/common/constants/music';
import { cn } from '@/common/lib/utils';
import React, { useState } from 'react'

const MusicBox = () => {
   const [isHover, setIsHover] = useState(false);

   return (
      <div
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
         className="fixed mt-5 top-0 right-0 z-30 hidden bg-[#EFECEC] dark:bg-calmBlue w-16 flex-col items-center justify-between overflow-hidden rounded-l-md border-r-4 border-black px-4 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-neutral-800 lg:flex"
      >
         <div className={`flex h-64 ${isHover ? 'items-start' : 'items-center'}`}>
            <div className={cn(isHover ? 'block' : 'hidden')}>
               <audio src={musicPlaylist[0].music}  controls
               className="mb-20"
               autoPlay/>
            </div>
         </div>
      </div>
   )
}

export default MusicBox