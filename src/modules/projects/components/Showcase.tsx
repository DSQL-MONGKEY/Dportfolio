import { projects } from '@/common/constants/constants'
import React from 'react'
import ItemProject from './ItemProject'

const Showcase = () => {
   return (
      <div className="flex flex-col gap-5">
         {projects.sort((x, y) => (
            x.isFeatured === y.isFeatured
         ) ? 0 : x.isFeatured ? -1 : 0)
         .map((item, idx) => (
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