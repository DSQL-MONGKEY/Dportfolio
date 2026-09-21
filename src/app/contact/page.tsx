import React from 'react'
import { Metadata } from "next";
import { WithContext, ContactPage as ContactPageSchema } from "schema-dts";
import Container from '@/components/elements/Container'
import StructuredData from '@/components/elements/StructuredData'
import Contact from '@/modules/contact'
import { CONTACT_EMAIL, LINKEDIN } from "@/common/constants/contact";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Contact ${METADATA.exTitle}`,
	description: `Hire Dimas Prasetyo — freelance website, mobile, and IoT development. Get in touch by email or LinkedIn.`,
	alternates: {
		canonical: `${process.env.DOMAIN}/contact`
	},
   keywords: 'hire software engineer, freelance web developer, freelance mobile developer, iot developer, contact, email, linkedin, website development, software testing'
}

function generateStructureData(): WithContext<ContactPageSchema> {
	return {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		name: 'Contact Dimas Prasetyo',
		description: 'Get in touch with Dimas Prasetyo for freelance website, mobile, and IoT projects.',
		mainEntity: {
			'@type': 'Person',
			name: METADATA.authors.name,
			email: CONTACT_EMAIL,
			url: METADATA.authors.url,
			sameAs: [LINKEDIN.link, 'https://github.com/DSQL-MONGKEY']
		}
	}
}

const ContactPage = () => {
   return (
      <>
         <StructuredData data={generateStructureData()} />
         <Container data-aos="fade-left">
				<Contact />
			</Container>
      </>
   )
}

export default ContactPage
