import { projects } from '@/common/constants/constants'
import React from 'react'
import ItemProject from './ItemProject'

const Showcase = () => {
   const sortedProjects = [...projects].sort(
      (a, b) => Number(b.isFeatured) - Number(a.isFeatured)
   )

   return (
      <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-2">
         {sortedProjects.map((item, index) => (
            <ItemProject
               key={item.title}
               index={index}
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
