import React from 'react'
import { MdRoundaboutRight } from "react-icons/md";


const Description = () => {
   return (
      <section className="flex flex-col">
         <div className="flex gap-1 space-y-2">
            <MdRoundaboutRight className="h-10 w-10"/>
            <h2 className="text-3xl font-lexend text-neutral-900 dark:text-slate-200">About</h2>
         </div>
         <p className="font-outfit text-md text-neutral-900 dark:text-slate-200">
            A Little Piece of my life
         </p>

         <div className="mt-10 gap-1 space-y-2">
            <h3 className="text-xl lg:text-4xl text-neutral-900 dark:text-slate-200 font-outfit ">
               Wassup homies! <br/> I&apos;m&nbsp;
               <span className="text-green-500">Dimas Prasetyo</span>🐼 
               <br/> a Software Engineer based in Indonesia
            </h3>

            <div className="font-outfit leading-relaxed text-neutral-900 dark:text-white">
               <p>
                  Seasoned Software Engineer with a strong focus on frontend development. Intermediate experience with Javascript/Typescript and well-versed of frontend technologies. Always passionate and open-minded to learn about new things.
               </p>
               
               <br />
               <p>
                  Someone who loves adapting to new challenges and constantly exploring fresh knowledge and ideas. Whenever I come across new technologies, I dive into their documentation and observe how others utilize them with best practices to learn effectively.
               </p>

               <br />
               <p>
                  My passion for software engineering, especially in Frontend development, stems from my love for creating visually appealing experiences. I enjoy crafting things that not only look great but also provide tangible value to others. In short, I thrive on bringing ideas to life in ways that people can see, feel, and enjoy.
               </p>
               
               <br />
               <p>
                  This portfolio is my little corner on the web where I share my journey, inspiration, and insights as a software engineer. It&apos;s also a sandbox for experimenting with ideas and features—some of which you might spot throughout this site. I hope you find something here that resonates with you!
               </p>

               <br/>
               <p>
                  Above all that, I enjoy design, sports, gaming, and naturally have a good intuitive sense in the art-visual related field, gotchu with that pixel-perfect taste! 🚀✨
               </p>
            </div>
         </div>

      </section>
   )
}

export default Description;