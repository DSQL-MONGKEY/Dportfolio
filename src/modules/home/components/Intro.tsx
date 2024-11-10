import TypeAnimation from '@/components/elements/TypeAnimation'
import React from 'react'

const Intro = () => {
   return (
      <section className="space-y-4 bg-cover bg-no-repeat">
            <div className="flex justify-between">
               <div className="text-2xl font-lexend dark:text-white">
                  <TypeAnimation 
                     sequence={[`Hi, i'm Dimas Prasetyo`, `Hi, i'm Software Engineer`]} 
                     delay={3000} 
                  />
               </div>
               <div className="text-2xl">
                  🐼
               </div>
            </div>

            <div className="space-y-4">
               <ul className='flex gap-3 ml-5 my-3 dark:text-white '>
                  <li className='flex gap-1 items-center'>
                     <div className='w-3 h-3 dark:bg-calmBlue bg-mainDark rounded shadow-xl'></div>
                     Frontend/Fullstack
                  </li>
                  <li className='flex gap-1 items-center'>
                     <div className='w-3 h-3 dark:bg-calmBlue bg-mainDark rounded'></div>
                     Depok, Indonesia
                  </li>
               </ul>
               <p className="leading-loose dark:text-white">
               Software Engineer driven by a passion for building modern user-focused applications that blend intuitive design with robust functionality. With expertise in JavaScript/TypeScript, I combine creativity with technical precision to deliver scalable, efficient, and highly readable applications. Solid understanding of other web technologies and an enthusiasm for solving complex challenges, always striving to find innovative and effective solutions for every project.
               </p>
            </div>
      </section>
   )
}

export default Intro