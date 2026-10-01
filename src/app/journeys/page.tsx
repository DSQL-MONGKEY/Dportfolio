import React from 'react'
import Container from '@/components/elements/Container'
import Journeys from '@/modules/journey'
import StructuredData from '@/components/elements/StructuredData'
import { WithContext, CollectionPage } from "schema-dts";
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import { buildMetadata } from "@/common/lib/seo";

export const metadata: Metadata = buildMetadata({
	title: `Career Journeys ${METADATA.exTitle}`,
	description: `Career journey of Dimas Prasetyo — from vocational school to fullstack engineer, with the people met along the way.`,
	path: '/journeys',
	keywords: 'software engineering, bangkit academy, cimb niaga, software tester, lembaga pengembangan komputer univeristas gunadarma, lepkom ug, smk citra negara, dscvry, kai, career journey, experiences',
})

function generateStructuredData(): WithContext<CollectionPage> {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: `Career journeys of ${METADATA.creator}`,
		description: 'Work and education milestones, with references from the people met along the way.',
		url: `${process.env.DOMAIN}/journeys`,
		about: {
			'@type': 'Person',
			name: METADATA.authors.name,
		},
	}
}

const JourneysPage = () => {
   return (
      <>
         <StructuredData id="journeys-page" data={generateStructuredData()} />
         <Container data-aos="fade-left">
            <Journeys />
         </Container>
      </>
   )
}

export default JourneysPage
