"use client"

import { Suspense, useEffect, ReactNode } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MusicBox from './MusicBox'
import AudioEngine from './audio-player/AudioEngine'
import { usePathname } from 'next/navigation'
import MobileSlideNav from './MobileSlideNav'
import SidebarGate from './SidebarGate'

interface LayoutsProps {
   children: ReactNode
}

const Layouts = ({ children }: LayoutsProps ) => {
   const pathName = usePathname();

   const hideMusicBox = pathName === '/playlist';

   
   useEffect(() =>{
      AOS.init({
         duration: 800,
         delay: 50,
         once: true
      })
   },[])

   return (
      <div className="flex h-full w-full flex-col justify-center overflow-x-clip ">
         
         <div className="flex w-full flex-col justify-center lg:flex-row lg: gap-5">
            
            <MobileSlideNav />

            <main className="no-scrollbar h-full w-full scroll-smooth transition-all duration-300 lg:ml-20 lg:min-h-screen lg:max-w-[854px]">
               {children}
            </main>

            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] dark:bg-[linear-gradient(to_right,#B983FF14_1px,transparent_1px),linear-gradient(to_bottom,#B983FF14_1px,transparent_1px)]"></div>

         </div>

         <Suspense fallback={null}>
            <SidebarGate />
         </Suspense>

         <AudioEngine />

         {!hideMusicBox && <MusicBox />}
      </div>
   )
}

export default Layouts
