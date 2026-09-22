import React from 'react'
import { RxCrumpledPaper } from 'react-icons/rx'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { articles } from '@/common/constants/constants'
import ArticleCard from './ArticleCard'
import ArticleLoading from './ArticleLoading'

const Articles = () => {
   return (
      <section>
         <NeoSectionHeading
            icon={<RxCrumpledPaper />}
            title="Articles"
            description="Notes, references, and writing spaces I keep."
            badge={`${articles.length} spaces`}
            badgeClassName="bg-[#25F4EE]"
         />

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((data, idx) =>
               data.link ? (
                  <ArticleCard key={idx} index={idx} data={data} />
               ) : (
                  <ArticleLoading key={idx} />
               )
            )}
         </div>
      </section>
   )
}

export default Articles
