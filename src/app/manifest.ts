import { MetadataRoute } from 'next'

export default function manifest():MetadataRoute.Manifest {
   return {
      name: 'Dimas Prasetyo - Software Engineer',
      short_name: 'Dimas Prasetyo',
      description: 'Portfolio Website, Personal Website, portfolio, software engineer journey, neobrutalism design, dimpfe portfolio',
      display: 'standalone',
      background_color: '#F6F54D',
      theme_color: '#F6F54D',
      icons: [
         {
            src: '/logo/logo.png',
            sizes: '192x192',
            type: 'image/png'
         }
      ]
   }
}
