import React from 'react'
import Container from '@/components/elements/Container'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import Universe from '@/modules/universe/Universe';

export const metadata: Metadata = {
	title: `Universe ${METADATA.exTitle}`,
	description: `A collection of my projects, experiments, and everything in between. It&apos;s a universe of creativity and innovation where I share my work and ideas with the world. Explore the cosmos of my projects and discover the wonders of my universe!`,
	alternates: {
		canonical: `${process.env.DOMAIN}/universe`
	},
   keywords: 'projects, experiments, creativity, innovation, universe'
}

const PlaylistPage = () => {
   return (
      <Container data-aos="fade-left">
         <Universe />
      </Container>
   )
}

export default PlaylistPage