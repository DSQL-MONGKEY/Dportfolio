import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
   const domain = process.env.DOMAIN || 'https://dimpfes.com'
   return [
      {
         url: domain,
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 1
      },
      {
         url: `${domain}/feeds`,
         changeFrequency: 'monthly',
         priority: 0.8
      },
   ]
} 