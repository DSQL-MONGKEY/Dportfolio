import { formatRupiah, formatUsd } from '@/common/lib/utils'

export type StoreCategoryId = 'greeting' | 'landing' | 'wedding' | 'birthday' | 'custom'

export type StoreCurrency = 'IDR' | 'USD'

export const IDR_PER_USD = 16300

export const formatStorePrice = (price: number, currency: StoreCurrency) =>
   currency === 'USD'
      ? formatUsd(Math.round(price / IDR_PER_USD))
      : formatRupiah(price)

export interface StoreCategory {
   id: StoreCategoryId
   label: string
   accent: string
}

export const storeCategories: StoreCategory[] = [
   { id: 'greeting', label: 'Greeting Site', accent: '#F4CE14' },
   { id: 'landing', label: 'Landing Page', accent: '#25F4EE' },
   { id: 'wedding', label: 'Wedding', accent: '#E1306C' },
   { id: 'birthday', label: 'Birthday', accent: '#8ad451' },
   { id: 'custom', label: 'Custom', accent: '#B983FF' },
]

export interface StoreProduct {
   id: string
   name: string
   category: StoreCategoryId
   description: string
   price: number
   features: string[]
   previewUrl: string
   accent: string
   badge?: string
}

export const storeProducts: StoreProduct[] = [
   {
      id: 'greeting-site',
      name: 'Greeting Website',
      category: 'greeting',
      description:
         'A personal greeting page for birthdays, anniversaries, or just because — send a link instead of a text.',
      price: 150000,
      features: [
         'Custom message and photos',
         'Background music',
         'Shareable private link',
         'Mobile friendly',
      ],
      previewUrl: '',
      accent: '#F4CE14',
      badge: 'Best seller',
   },
   {
      id: 'landing-page',
      name: 'Landing Page',
      category: 'landing',
      description:
         'A one-page website to launch your product, event, or small business — built to convert visitors.',
      price: 350000,
      features: [
         'Conversion-focused sections',
         'WhatsApp / contact CTA',
         'SEO basics plus OG image',
         'Delivered in days, not weeks',
      ],
      previewUrl: '',
      accent: '#25F4EE',
   },
   {
      id: 'wedding-invitation',
      name: 'Wedding Invitation',
      category: 'wedding',
      description:
         'A digital wedding invitation your guests can open from anywhere — elegant, fast, and easy to share.',
      price: 250000,
      features: [
         'Couple profile and love story',
         'Photo gallery plus countdown',
         'Event details and maps',
         'Guest RSVP section',
      ],
      previewUrl: '',
      accent: '#E1306C',
      badge: 'New',
   },
   {
      id: 'birthday-page',
      name: 'Birthday Page',
      category: 'birthday',
      description:
         'Surprise someone with an interactive birthday page full of photos, wishes, and their favorite song.',
      price: 175000,
      features: [
         'Interactive wishes wall',
         'Photo timeline',
         'Music player',
         'Surprise reveal animation',
      ],
      previewUrl: '',
      accent: '#8ad451',
   },
   {
      id: 'custom-project',
      name: 'Custom Web Project',
      category: 'custom',
      description:
         'Need something else? Tell me the idea and I will scope, design, and build it around your needs.',
      price: 500000,
      features: [
         'Discovery call',
         'Custom design and build',
         'Revisions included',
         'Handover and support',
      ],
      previewUrl: '',
      accent: '#B983FF',
   },
]

export const storeSteps = [
   {
      title: 'Pick a product',
      description: 'Choose a template or order a fully custom build from the catalog.',
   },
   {
      title: 'Send your content',
      description: 'Photos, text, music, and links — I take care of the rest.',
   },
   {
      title: 'Review and launch',
      description: 'Preview the draft, request revisions, then share your link.',
   },
]

export const storeFaqs = [
   {
      q: 'How long does an order take?',
      a: 'Most greeting and birthday pages are delivered in 2–3 days. Landing pages and wedding invitations typically take 5–7 days depending on revisions.',
   },
   {
      q: 'Can I request a fully custom design?',
      a: 'Yes. Pick the Custom Web Project and describe your idea — we shape the scope together before any payment.',
   },
   {
      q: 'How do revisions work?',
      a: 'Every package includes revision rounds. You review a live preview link and send your feedback in one batch per round.',
   },
   {
      q: 'What do you need from me?',
      a: 'Your content (text, photos, music), any brand assets, and your deadline. If something is missing, I can use placeholder content first.',
   },
   {
      q: 'How do I order and pay?',
      a: 'Send the order through the contact form. I reply with availability and a quote, and payment is split into a down payment and a final payment after approval.',
   },
   {
      q: 'Do you host the site?',
      a: 'I can deploy it for you or hand over a ready-to-deploy project — your choice.',
   },
]
