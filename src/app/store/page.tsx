import React from 'react'
import { Metadata } from "next";
import { WithContext, FAQPage, ItemList } from "schema-dts";
import Container from '@/components/elements/Container'
import StructuredData from '@/components/elements/StructuredData'
import Store from '@/modules/store'
import { METADATA } from "@/common/constants/metadata";
import { storeFaqs, storeProducts } from "@/common/constants/store";

const domain = process.env.DOMAIN

export const metadata: Metadata = {
	title: `Store ${METADATA.exTitle}`,
	description: `Digital products by Dimas Prasetyo — greeting websites, landing pages, wedding and birthday invitations. IDR pricing, fast delivery, custom builds welcome.`,
	alternates: {
		canonical: `${domain}/store`
	},
   keywords: 'website template, landing page, undangan pernikahan digital, wedding invitation, birthday page, greeting website, jasa pembuatan website, website murah, dimas prasetyo',
   openGraph: {
      title: `Store ${METADATA.exTitle}`,
      description: 'Greeting websites, landing pages, wedding and birthday invitations — fast delivery and custom builds welcome.',
      url: `${domain}/store`,
      type: 'website',
      images: METADATA.profile,
   },
   twitter: {
      card: 'summary_large_image',
      title: `Store ${METADATA.exTitle}`,
      description: 'Greeting websites, landing pages, wedding and birthday invitations — fast delivery and custom builds welcome.',
      images: METADATA.profile,
   },
}

function generateProductsSchema(): WithContext<ItemList> {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Digital products by Dimas Prasetyo',
		itemListElement: storeProducts.map((product, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'Product',
				name: product.name,
				description: product.description,
				url: product.previewUrl || `${domain}/store`,
				offers: {
					'@type': 'Offer',
					price: String(product.price),
					priceCurrency: 'IDR',
					availability: 'https://schema.org/InStock',
				},
			},
		})),
	}
}

function generateFaqSchema(): WithContext<FAQPage> {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: storeFaqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.a,
			},
		})),
	}
}

const StorePage = () => {
   return (
      <>
         <StructuredData id="store-products" data={generateProductsSchema()} />
         <StructuredData id="store-faq" data={generateFaqSchema()} />
         <Container data-aos="fade-left">
            <Store />
         </Container>
      </>
   )
}

export default StorePage
