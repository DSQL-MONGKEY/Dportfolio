import { services } from '@/common/constants/constants';
import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react'

import { SiCloudflareworkers } from "react-icons/si";
import ServicesCard from './ServicesCard';

const Services = () => {
   return (
      <section>
         <SectionHeading icon={<SiCloudflareworkers />} title={"Services"} />
         <SectionSubHeading>
            <p>The services that i can serve</p>
         </SectionSubHeading>
         
         <div className="grid grid-cols-2 gap-5 mt-6">
            {services.map((item, idx) => (
               <ServicesCard key={idx} id={item.id} title={item.title} description={item.description} />
            ))}
         </div>
      </section>
   )
}

export default Services