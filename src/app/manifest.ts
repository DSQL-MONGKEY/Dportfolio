import { MetadataRoute } from 'next'

export default function manifest():MetadataRoute.Manifest {
   return {
      name: 'Dimas Prasetyo - Software Engineer',
      short_name: 'Dimas Prasetyo',
      description: 'Portfolio Website, Personal Website, portfolio, software engineer journey, neobrutalism design, dimpfe portfolio, Dimas Prasetyo, Dimas Prasetyo UG',
      display: 'standalone',
      background_color: '#F6F54D',
      theme_color: '#F6F54D',
      icons: [
         {
            src: '/img/logo-192.png',
            sizes: '192x192',
            type: 'image/png'
         },
         {
            src: '/img/logo-384.png',
            sizes: '384x384',
            type: 'image/png'
         },
         {
            src: '/img/logo-512.png',
            sizes: '192x192',
            type: 'image/png'
         },
      ]
   }
}
