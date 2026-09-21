import React from 'react'
import { Play } from 'lucide-react'
import { BsTiktok } from 'react-icons/bs'
import { cn, formatCompactNumber } from '@/common/lib/utils'
import { featuredVideos } from '@/common/constants/feeds'
import { getTikTokVideoInfo } from '@/common/lib/tiktok'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'

const FeaturedVideos = async () => {
   const videos = await Promise.all(
      featuredVideos.map(async (video) => ({
         ...video,
         info: await getTikTokVideoInfo(video.id),
      }))
   )

   return (
      <section>
         <NeoSectionHeading
            title="Featured Videos"
            description="Short stories from my thesis era — tap a card to watch on TikTok."
            badge={`${featuredVideos.length} videos`}
            badgeClassName="bg-[#25F4EE]"
         />

         <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-5">
            {videos.map((video, index) => (
               <a
                  key={video.id}
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                     'group flex flex-col overflow-hidden border-2 border-mainDark bg-main transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack',
                     index === 1
                        ? 'shadow-[3px_3px_0px_0px_#FE2C55] sm:rotate-1 sm:shadow-[4px_4px_0px_0px_#FE2C55]'
                        : 'shadow-[3px_3px_0px_0px_#25F4EE] sm:-rotate-1 sm:shadow-[4px_4px_0px_0px_#25F4EE]'
                  )}
               >
                  <header className="flex items-center justify-between gap-1 border-b-2 border-mainDark px-2 py-1.5 dark:border-darkBorder sm:gap-2 sm:px-3 sm:py-2">
                     <span className="flex min-w-0 items-center gap-1 sm:gap-2">
                        <BsTiktok className="shrink-0 text-sm sm:text-base" />
                        <span className="truncate font-lexend text-[10px] font-bold sm:text-xs">
                           {video.title}
                        </span>
                     </span>
                     <span className="hidden shrink-0 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2 sm:inline">
                        Watch ↗
                     </span>
                  </header>

                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-mainDark dark:bg-darkBg">
                     <BsTiktok className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-main/20 sm:text-5xl" />

                     {video.info.thumbnailUrl && (
                        <img
                           src={video.info.thumbnailUrl}
                           alt={video.title}
                           loading="lazy"
                           className="relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                     )}

                     <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-mainDark bg-shineRed text-mainDark shadow-[2px_2px_0px_0px_#000] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:shadow-[3px_3px_0px_0px_#000]">
                           <Play className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" />
                        </span>
                     </span>

                     <span className="absolute bottom-2 left-2 flex items-center gap-1 border-2 border-mainDark bg-main px-1.5 py-0.5 font-outfit text-[9px] font-bold text-mainDark dark:border-darkBorder dark:bg-darkText sm:bottom-3 sm:left-3 sm:gap-1.5 sm:px-2 sm:text-[11px]">
                        <Play className="h-2 w-2 sm:h-2.5 sm:w-2.5" fill="currentColor" />
                        {formatCompactNumber(video.info.views ?? video.fallbackViews)} views
                     </span>
                  </div>
               </a>
            ))}
         </div>
      </section>
   )
}

export default FeaturedVideos
