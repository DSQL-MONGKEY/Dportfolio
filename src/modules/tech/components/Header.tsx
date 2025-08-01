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
            Here&apos;s a trail of technologies and devices that I&apos;ve conquered - every single one of them is a silent witness of learning, challenges and achievements. This is not just a list, but a story of how I grew and adapted.
         </SectionSubHeading>
      </div>
   )
}

export default Header