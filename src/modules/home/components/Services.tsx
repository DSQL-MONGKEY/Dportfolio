import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react'

import { SiCloudflareworkers } from "react-icons/si";

const Services = () => {
   return (
      <section>
         <SectionHeading icon={<SiCloudflareworkers />} title="Services" />
         <SectionSubHeading>
            <p>The services that i can serve</p>
         </SectionSubHeading>
         
      </section>
   )
}

export default Services