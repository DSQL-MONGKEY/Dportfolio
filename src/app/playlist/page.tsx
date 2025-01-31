import React from 'react'
import Container from '@/components/elements/Container'
import Playlist from '@/modules/playlist'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Playlist ${METADATA.exTitle}`,
	description: `Hope you enjoy with my playlist`,
	alternates: {
		canonical: `${process.env.DOMAIN}/playlist`
	},
   keywords: 'music, playlist, music box, bruno mars, never enough'
}

const PlaylistPage = () => {
   return (
      <Container data-aos="fade-left">
         <Playlist />
      </Container>
   )
}

export default PlaylistPage