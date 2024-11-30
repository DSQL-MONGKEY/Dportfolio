import React from 'react'

const ArticleLoading = () => {
   return (
      <div className="flex h-max min-w-[250px] flex-col space-y-2">
         <div className="h-28 w-full animate-pulse overflow-hidden rounded-md border-2 border-neutral-700 dark:border-neutral-400"></div>
         <div className="h-2 w-24 border-neutral-700 dark:border-neutral-400 border-2 overflow-hidden animate-pulse rounded-md"></div>
      </div>
   )
}

export default ArticleLoading