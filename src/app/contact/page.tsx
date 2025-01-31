import React from 'react'
import Container from '@/components/elements/Container'
import Contact from '@/modules/contact'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Contact ${METADATA.exTitle}`,
	description: `Get in touch with me`,
	alternates: {
		canonical: `${process.env.DOMAIN}/contact`
	},
   keywords: 'software engineer, frontend developer, freelance web developer, instagram, tiktok, reactjs, nextjs, javasript, typescript, contact'
}

const ContactPage = () => {
   return (
      <Container data-aos="fade-left">
			<Contact />
		</Container>
   )
}

export default ContactPage