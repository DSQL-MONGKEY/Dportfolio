import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import React from 'react'
import { RxCrumpledPaper } from "react-icons/rx";
import ArticleCard from './ArticleCard';
import { articles } from '@/common/constants/constants';
import ArticleLoading from './ArticleLoading';

const Articles = () => {
   
   return (
      <section>
         <div className="space-y-2">
            <SectionHeading icon={<RxCrumpledPaper />} title={"Articles"} />
            <SectionSubHeading>
               <p>You can read my articles and I hope that&apos;s all usefull</p>
            </SectionSubHeading>
         </div>

         <div className='no-scrollbar mt-4 flex h-40 flex-row space-x-3 overflow-y-hidden overflow-x-scroll pt-2'>
            {true ? 
               [1, 2, 3, 4].map(item => <ArticleLoading key={item} />) :
               
               articles.map((data, idx) => (
               <ArticleCard key={idx} data={data}  index={idx}/>
            ))}
         </div>
      </section>
   )
}

export default Articles