import { services } from '@/common/constants/constants';
import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react'

import { SiCloudflareworkers } from "react-icons/si";
import ServicesCard from './ServicesCard';

const Services = () => {
   return (
      <section>
         <div className="space-y-2">
            <SectionHeading icon={<SiCloudflareworkers />} title={"Services"} />
            <SectionSubHeading>
               <p>The services that i can serve</p>
            </SectionSubHeading>
         </div>
         
         <div className="grid grid-cols-1 gap-3 mt-6">
            {services.map((item, idx) => (
               <ServicesCard key={item.id} icon={item.icon} index={idx} title={item.title} description={item.description} />
            ))}
         </div>
      </section>
   )
}

export default Services