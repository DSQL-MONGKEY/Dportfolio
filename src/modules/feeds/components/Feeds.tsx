import React from 'react'
import { GITHUB } from '@/common/constants/feeds'
import { getContributions, getGithubProfile } from '@/common/lib/github'
import FeaturedVideos from './FeaturedVideos'
import GithubActivity from './GithubActivity'
import Socials from './Socials'

const Feeds = async () => {
   const [profile, contributions] = await Promise.all([
      getGithubProfile(GITHUB.username),
      getContributions(GITHUB.username),
   ])

   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <section>
            <div className="flex flex-wrap items-center gap-3">
               <h1 className="font-lexend text-3xl font-black uppercase tracking-[0.2em]">Feeds</h1>
               <span className="border-2 border-mainDark bg-lightGreen px-2 py-0.5 font-outfit text-xs font-bold text-mainDark dark:border-darkBorder">
                  online
               </span>
            </div>
            <p className="mt-2 max-w-xl font-outfit text-sm opacity-70">
               Videos, socials, and GitHub activity — the stuff I post outside this portfolio.
            </p>
         </section>

         <FeaturedVideos />

         <Socials profile={profile} />

         <GithubActivity profile={profile} contributions={contributions} />
      </div>
   )
}

export default Feeds
