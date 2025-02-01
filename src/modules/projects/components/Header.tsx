import React from 'react'
import SectionHeading from '@/components/elements/SectionHeading'
import { GoProjectTemplate } from "react-icons/go";
import SectionSubHeading from '@/components/elements/SectionSubHeading';

const Header = () => {
   return (
      <div className='flex flex-col'>
         <SectionHeading
            title='Projects'
            icon={<GoProjectTemplate />}
         />
         <SectionSubHeading>
            <p>Few projects that i&apos;ve worked on so far</p>
         </SectionSubHeading>
      </div>
   )
}

export default Header