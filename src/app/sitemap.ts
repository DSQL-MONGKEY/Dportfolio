import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
   const domain = process.env.DOMAIN || 'https://dimpfes.com'
   const now = new Date()

   return [
      {
         url: domain,
         lastModified: now,
         changeFrequency: 'monthly',
         priority: 1,
      },
      {
         url: `${domain}/projects`,
         lastModified: now,
         changeFrequency: 'monthly',
         priority: 0.9,
      },
      {
         url: `${domain}/store`,
         lastModified: now,
         changeFrequency: 'weekly',
         priority: 0.9,
      },
      {
         url: `${domain}/tech`,
         lastModified: now,
         changeFrequency: 'monthly',
         priority: 0.8,
      },
      {
         url: `${domain}/journeys`,
         lastModified: now,
         changeFrequency: 'yearly',
         priority: 0.7,
      },
      {
         url: `${domain}/about`,
         lastModified: now,
         changeFrequency: 'yearly',
         priority: 0.7,
      },
      {
         url: `${domain}/contact`,
         lastModified: now,
         changeFrequency: 'yearly',
         priority: 0.8,
      },
      {
         url: `${domain}/playlist`,
         lastModified: now,
         changeFrequency: 'monthly',
         priority: 0.6,
      },
      {
         url: `${domain}/feeds`,
         lastModified: now,
         changeFrequency: 'weekly',
         priority: 0.8,
      },
   ]
}
