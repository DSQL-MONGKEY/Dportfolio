import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react'
import { RxCrumpledPaper } from "react-icons/rx";

const Articles = () => {
   return (
      <section>
         <SectionHeading icon={<RxCrumpledPaper />} title={"Articles"} />
         <SectionSubHeading>
            <p>You can read my articles and I hope that&apos;s all usefull</p>
         </SectionSubHeading>
      </section>
   )
}

export default Articles