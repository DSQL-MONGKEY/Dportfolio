import React from 'react'
import Image from 'next/image'
import { BsGithub, BsInstagram, BsTiktok } from 'react-icons/bs'
import { dimas } from '@/assets'
import { GITHUB, INSTAGRAM, TIKTOK } from '@/common/constants/feeds'
import { GithubProfile } from '@/common/lib/github'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'

interface SocialsProps {
   profile: GithubProfile | null
}

const socialCardClass =
   'group flex flex-col border-2 border-mainDark bg-main p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack'

const socialButtonClass =
   'mt-4 inline-block border-2 border-mainDark px-3 py-1.5 text-center font-outfit text-xs font-bold text-mainDark transition-transform group-hover:-translate-y-0.5 dark:border-darkBorder'

const Socials = ({ profile }: SocialsProps) => {
   return (
      <section>
         <NeoSectionHeading
            title="Socials"
            description="Where I share my life, works, and code."
            badge="say hi"
            badgeClassName="bg-[#E1306C] text-main dark:text-main"
         />

         <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <a
               href={INSTAGRAM.link}
               target="_blank"
               rel="noreferrer"
               className={`${socialCardClass} shadow-[4px_4px_0px_0px_#E1306C]`}
            >
               <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-mainDark bg-[#E1306C] text-lg text-main dark:border-darkBorder">
                     <BsInstagram />
                  </span>
                  <span className="font-lexend text-xs font-black uppercase tracking-[0.2em] opacity-60">Instagram</span>
               </div>

               <div className="mt-4 flex items-center gap-3">
                  <Image
                     src={dimas}
                     alt="Dimas Prasetyo"
                     width={48}
                     height={48}
                     className="h-12 w-12 rounded-full border-2 border-mainDark object-cover dark:border-darkBorder"
                  />
                  <div className="min-w-0">
                     <p className="truncate font-lexend text-sm font-bold">{INSTAGRAM.handle}</p>
                     <p className="truncate font-outfit text-xs opacity-60">Daily life &amp; behind the scenes</p>
                  </div>
               </div>

               <span className={`${socialButtonClass} bg-[#E1306C] text-main dark:text-main`}>Follow ↗</span>
            </a>

            <a
               href={TIKTOK.link}
               target="_blank"
               rel="noreferrer"
               className={`${socialCardClass} shadow-[4px_4px_0px_0px_#25F4EE]`}
            >
               <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-mainDark bg-[#25F4EE] text-lg text-mainDark dark:border-darkBorder">
                     <BsTiktok />
                  </span>
                  <span className="font-lexend text-xs font-black uppercase tracking-[0.2em] opacity-60">TikTok</span>
               </div>

               <div className="mt-4">
                  <p className="truncate font-lexend text-sm font-bold">{TIKTOK.handle}</p>
                  <p className="truncate font-outfit text-xs opacity-60">Build logs, skripsi era &amp; random clips</p>
               </div>

               <span className={`${socialButtonClass} bg-[#25F4EE]`}>Follow ↗</span>
            </a>

            <a
               href={GITHUB.link}
               target="_blank"
               rel="noreferrer"
               className={`${socialCardClass} shadow-[4px_4px_0px_0px_#F4CE14]`}
            >
               <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-mainDark bg-[#F4CE14] text-lg text-mainDark dark:border-darkBorder">
                     <BsGithub />
                  </span>
                  <span className="font-lexend text-xs font-black uppercase tracking-[0.2em] opacity-60">Github</span>
               </div>

               <div className="mt-4 flex items-center gap-3">
                  {profile ? (
                     <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="h-12 w-12 rounded-full border-2 border-mainDark object-cover dark:border-darkBorder"
                     />
                  ) : (
                     <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-mainDark bg-bg text-lg dark:border-darkBorder dark:bg-darkBg">
                        <BsGithub />
                     </span>
                  )}
                  <div className="min-w-0">
                     <p className="truncate font-lexend text-sm font-bold">{GITHUB.handle}</p>
                     <p className="truncate font-outfit text-xs opacity-60">
                        {profile ? `${profile.followers} followers · ${profile.publicRepos} repos` : 'Open source & experiments'}
                     </p>
                  </div>
               </div>

               <span className={`${socialButtonClass} bg-[#F4CE14]`}>Follow ↗</span>
            </a>
         </div>
      </section>
   )
}

export default Socials
