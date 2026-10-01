import { Metadata } from 'next'
import { METADATA } from '@/common/constants/metadata'

interface PageSeo {
   title: string
   description: string
   path: string
   keywords?: string
   type?: 'website' | 'article' | 'profile'
}

export const buildMetadata = ({ title, description, path, keywords, type = 'website' }: PageSeo): Metadata => {
   const url = `${process.env.DOMAIN}${path}`

   return {
      title,
      description,
      keywords,
      alternates: {
         canonical: url,
      },
      openGraph: {
         title,
         description,
         url,
         siteName: METADATA.openGraph.siteName,
         locale: METADATA.openGraph.locale,
         type,
         images: METADATA.profile,
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description,
         images: METADATA.profile,
      },
   }
}
