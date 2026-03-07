import { Rocket } from "lucide-react";


const JourneyBottomLine = () => {
   return (
      <>
         <div className='flex flex-col w-full gap-2'>
            <div className='flex flex-col w-full justify-center items-center bg-neutral-100 dark:bg-neutral-900 rounded-md border-2 border-black shadow-light p-2'>
            <div className='flex gap-2 items-center'>
               <span className='font-paytone text-lg'>
                  Freelance
               </span>
               <span className='font-outfit text-sm'>
                  Software / IoT Developer
               </span>
            </div>
            <span className='font-outfit text-xs'>
               2023 - Surviving
            </span>
         </div>
         </div>
         <div>
            <p className='text-xs lg:text-2xl text-neutral-900 dark:text-slate-200 font-outfit text-center mt-5'>
               And that&apos;s my journey so far! <br/> I&apos;m excited to see where it takes me next 
               <Rocket className='inline-block' />
            </p>
         </div>
      </>
   )
}

export default JourneyBottomLine;