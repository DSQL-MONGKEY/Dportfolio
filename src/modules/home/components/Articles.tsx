import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react'
import { RxCrumpledPaper } from "react-icons/rx";

const Articles = () => {
   return (
      <section>
         <div className="space-y-2">
            <SectionHeading icon={<RxCrumpledPaper />} title={"Articles"} />
            <SectionSubHeading>
               <p>You can read my articles and I hope that&apos;s all usefull</p>
            </SectionSubHeading>
         </div>

         <div className='no-scrollbar mt-4 flex h-40 flex-row space-x-3 overflow-y-hidden overflow-x-scroll pt-2'>
            
         </div>
      </section>
   )
}

export default Articles