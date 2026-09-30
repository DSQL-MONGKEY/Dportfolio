import React from 'react'
import Container from '@/components/elements/Container'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import Universe from '@/modules/universe/Universe';

export const metadata: Metadata = {
	title: `Universe ${METADATA.exTitle}`,
	description: `Explore Dimas Prasetyo's universe — an orbital map of my worlds: projects, tech stack, career, music, socials, and notes, plus wise stars and a visitor star field`,
	alternates: {
		canonical: `${process.env.DOMAIN}/universe`
	},
   keywords: 'universe, orbital map, projects, tech stack, career, playlist, socials, quotes, star field, interactive portfolio'
}

const UniversePage = () => {
   return (
      <Container data-aos="fade-left">
         <Universe />
      </Container>
   )
}

export default UniversePage
