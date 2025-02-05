import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading'
import React from 'react'
import { GiTechnoHeart } from "react-icons/gi";

const Header = () => {
   return (
      <div>
         <SectionHeading 
            title='Techys' 
            icon={<GiTechnoHeart />} 
         />
         <SectionSubHeading>
            Technologies & Tools that i&apos;ve worked with
         </SectionSubHeading>
      </div>
   )
}

export default Header