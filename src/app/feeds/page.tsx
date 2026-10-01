import React from 'react'
import Container from '@/components/elements/Container'
import Feeds from '@/modules/feeds'
import StructuredData from '@/components/elements/StructuredData'
import { WithContext, CollectionPage } from "schema-dts";
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import { buildMetadata } from "@/common/lib/seo";

export const revalidate = 3600

export const metadata: Metadata = buildMetadata({
	title: `Feeds & Socials ${METADATA.exTitle}`,
	description: `Featured videos, socials, and GitHub activity of Dimas Prasetyo — TikTok clips, Instagram, and a live commit graph.`,
	path: '/feeds',
	keywords: 'tiktok, instagram, github, social media, feeds, commit graph, featured videos',
})

function generateStructuredData(): WithContext<CollectionPage> {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: `Social feeds of ${METADATA.creator}`,
		description: 'Featured TikTok videos, social profiles, and GitHub contribution activity.',
		url: `${process.env.DOMAIN}/feeds`,
		about: {
			'@type': 'Person',
			name: METADATA.authors.name,
		},
	}
}

const FeedsPage = () => {
   return (
      <>
         <StructuredData id="feeds-page" data={generateStructuredData()} />
         <Container data-aos="fade-left">
            <Feeds />
         </Container>
      </>
   )
}

export default FeedsPage
