import React from 'react'

const ArticleLoading = () => {
   return (
      <div className="flex h-full min-h-[150px] animate-pulse flex-col gap-3 border-2 border-mainDark bg-main p-4 dark:border-darkBorder dark:bg-secondaryBlack">
         <div className="h-10 w-10 border-2 border-mainDark bg-bg dark:border-darkBorder dark:bg-darkBg" />
         <div className="h-3 w-24 bg-mainDark/15 dark:bg-darkText/15" />
         <div className="h-2 w-full bg-mainDark/10 dark:bg-darkText/10" />
      </div>
   )
}

export default ArticleLoading
