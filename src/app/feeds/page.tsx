import React from 'react'
import Container from '@/components/elements/Container'
import Feeds from '@/modules/feeds'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const revalidate = 3600

export const metadata: Metadata = {
	title: `Feeds ${METADATA.exTitle}`,
	description: `Featured videos, socials, and GitHub activity of Dimas Prasetyo`,
	alternates: {
		canonical: `${process.env.DOMAIN}/feeds`
	},
   keywords: 'tiktok, instagram, github, social media, feeds, commit graph, featured videos'
}

const FeedsPage = () => {
   return (
      <Container data-aos="fade-left">
         <Feeds />
      </Container>
   )
}

export default FeedsPage