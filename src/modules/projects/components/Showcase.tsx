import { projects } from '@/common/constants/constants'
import React from 'react'
import ItemProject from './ItemProject'

const Showcase = () => {
   return (
      <div className="flex flex-col gap-5">
         {projects.map((item, idx) => (
            <ItemProject
               key={idx}
               title={item.title}
               techStack={item.techStack}
               desc={item.desc}
               link={item.link}
               isFeatured={item.isFeatured}
            />
         ))}
      </div>
   )
}

export default Showcase