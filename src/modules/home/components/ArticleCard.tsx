import { ArticleItem } from '@/common/types/article'
import React from 'react'

interface ArticleCardProps {
   index: number
   data: ArticleItem
}

const ArticleCard = ({ index, data }: ArticleCardProps) => {

   return (
      <button key={index} className='relative transition hover:scale-95 hover:duration-300'>
         <div className="relative z-10 flex h-max min-w-[250px] flex-col items-start space-y-1">
            <div className="overflow-hidden h-28 w-full rounded-md">
            </div>
            <p>{data.title}</p>
            <p>{data.tags}</p>
         </div>
      </button>
   )
}

export default ArticleCard