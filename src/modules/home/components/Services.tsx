import { services } from '@/common/constants/constants';
import NeoSectionHeading from '@/components/elements/NeoSectionHeading';
import React from 'react'

import { SiCloudflareworkers } from "react-icons/si";
import ServicesCard from './ServicesCard';

const Services = () => {
   return (
      <section>
         <NeoSectionHeading
            icon={<SiCloudflareworkers />}
            title="Services"
            description="What I can build with you."
            badge="hire me"
            badgeClassName="bg-[#F4CE14]"
         />

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((item, idx) => (
               <ServicesCard key={item.id} icon={item.icon} index={idx} title={item.title} description={item.description} />
            ))}
         </div>
      </section>
   )
}

export default Services
