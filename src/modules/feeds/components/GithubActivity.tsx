import React from 'react'
import { BsGithub } from 'react-icons/bs'
import CommitGraph, { levelClasses } from '@/components/ui/CommitGraph'
import { cn } from '@/common/lib/utils'
import { GITHUB } from '@/common/constants/feeds'
import { Contributions, GithubProfile } from '@/common/lib/github'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'

interface GithubActivityProps {
   profile: GithubProfile | null
   contributions: Contributions | null
}

const GithubActivity = ({ profile, contributions }: GithubActivityProps) => {
   return (
      <section>
         <NeoSectionHeading
            title="Github Activity"
            description="My commit rhythm over the last year."
            badge={contributions ? `${contributions.total} commits` : GITHUB.handle}
            badgeClassName="bg-lightGreen"
         />

         <div className="border-2 border-mainDark bg-main p-4 shadow-[4px_4px_0px_0px_#8ad451] dark:border-darkBorder dark:bg-secondaryBlack md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
               <span className="flex items-center gap-2 font-lexend text-xs font-black uppercase tracking-[0.2em]">
                  <BsGithub /> Contribution Graph
               </span>
               <a
                  href={GITHUB.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2"
               >
                  @{GITHUB.handle} ↗
               </a>
            </div>

            <div className="mt-4">
               {contributions ? (
                  <CommitGraph days={contributions.days} />
               ) : (
                  <p className="font-outfit text-sm opacity-70">
                     Activity is unavailable right now — check my GitHub profile instead.
                  </p>
               )}
            </div>

            {contributions && (
               <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-outfit text-[11px] font-bold opacity-70">
                  <span>
                     {contributions.total} contributions in the last year
                     {profile ? ` · ${profile.publicRepos} public repos` : ''}
                  </span>
                  <span className="flex items-center gap-1">
                     Less
                     {[0, 1, 2, 3, 4].map((level) => (
                        <span
                           key={level}
                           className={cn('h-3 w-3 rounded-[2px]', levelClasses[level])}
                        />
                     ))}
                     More
                  </span>
               </div>
            )}
         </div>
      </section>
   )
}

export default GithubActivity
