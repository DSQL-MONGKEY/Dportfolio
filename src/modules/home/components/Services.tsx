import { services } from '@/common/constants/constants';
import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import React from 'react'

import { SiCloudflareworkers } from "react-icons/si";

const Services = () => {
   return (
      <section>
         <SectionHeading icon={<SiCloudflareworkers />} title={"Services"} />
         <SectionSubHeading>
            <p>The services that i can serve</p>
         </SectionSubHeading>
         
         <div className="grid grid-cols-2 gap-3 mt-6">
            {services.map((item, idx) => (
               <Card key={idx}>
                  <CardContent>
                     
                  </CardContent>
                  <CardHeader>
                     <CardTitle>{item.title}</CardTitle>
                     <CardDescription>{item.subTitle}</CardDescription>
                  </CardHeader>
               </Card>
            ))}
         </div>
      </section>
   )
}

export default Services