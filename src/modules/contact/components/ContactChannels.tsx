import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs'
import { TbBrandGmail } from 'react-icons/tb'
import NeoSectionHeading from '@/components/elements/NeoSectionHeading'
import { cn } from '@/common/lib/utils'
import { CONTACT_EMAIL, LINKEDIN } from '@/common/constants/contact'
import { GITHUB, INSTAGRAM, TIKTOK } from '@/common/constants/feeds'

const channels = [
   {
      title: 'Email',
      handle: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`,
      icon: <TbBrandGmail />,
      accent: '#F55353',
      iconText: 'text-main',
      shadow: 'shadow-[4px_4px_0px_0px_#F55353]',
   },
   {
      title: 'LinkedIn',
      handle: LINKEDIN.handle,
      link: LINKEDIN.link,
      icon: <BsLinkedin />,
      accent: '#0A66C2',
      iconText: 'text-main',
      shadow: 'shadow-[4px_4px_0px_0px_#0A66C2]',
   },
   {
      title: 'GitHub',
      handle: GITHUB.handle,
      link: GITHUB.link,
      icon: <BsGithub />,
      accent: '#F4CE14',
      iconText: 'text-mainDark',
      shadow: 'shadow-[4px_4px_0px_0px_#F4CE14]',
   },
   {
      title: 'Instagram',
      handle: INSTAGRAM.handle,
      link: INSTAGRAM.link,
      icon: <BsInstagram />,
      accent: '#E1306C',
      iconText: 'text-main',
      shadow: 'shadow-[4px_4px_0px_0px_#E1306C]',
   },
   {
      title: 'TikTok',
      handle: TIKTOK.handle,
      link: TIKTOK.link,
      icon: <BsTiktok />,
      accent: '#25F4EE',
      iconText: 'text-mainDark',
      shadow: 'shadow-[4px_4px_0px_0px_#25F4EE]',
   },
]

const ContactChannels = () => {
   return (
      <section>
         <NeoSectionHeading
            title="Other ways to reach me"
            description="Prefer a DM? Any of these work."
            badge="socials"
            badgeClassName="bg-[#E1306C] text-main dark:text-main"
         />

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
               <a
                  key={channel.title}
                  href={channel.link}
                  target={channel.link.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className={cn(
                     'group flex items-center gap-3 border-2 border-mainDark bg-main p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack',
                     channel.shadow
                  )}
               >
                  <span
                     className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center border-2 border-mainDark text-lg dark:border-darkBorder',
                        channel.iconText
                     )}
                     style={{ backgroundColor: channel.accent }}
                  >
                     {channel.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                     <span className="block font-lexend text-sm font-bold">{channel.title}</span>
                     <span className="block truncate font-outfit text-xs opacity-60">
                        {channel.handle}
                     </span>
                  </span>

                  <span className="shrink-0 font-outfit text-[11px] font-bold underline decoration-2 underline-offset-2">
                     Open ↗
                  </span>
               </a>
            ))}
         </div>
      </section>
   )
}

export default ContactChannels
