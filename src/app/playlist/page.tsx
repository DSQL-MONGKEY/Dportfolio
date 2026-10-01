import React from 'react'
import Container from '@/components/elements/Container'
import Playlist from '@/modules/playlist'
import StructuredData from '@/components/elements/StructuredData'
import { WithContext, MusicPlaylist } from "schema-dts";
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import { buildMetadata } from "@/common/lib/seo";
import { musicPlaylist } from "@/common/constants/music";

export const metadata: Metadata = buildMetadata({
	title: `Music Playlist ${METADATA.exTitle}`,
	description: `Songs on repeat while I build — a personal playlist with a music player, live frequency visualizer, and repeat controls.`,
	path: '/playlist',
	keywords: 'music, playlist, music box, personal playlist, songs, dimas prasetyo',
})

function generateStructuredData(): WithContext<MusicPlaylist> {
	return {
		'@context': 'https://schema.org',
		'@type': 'MusicPlaylist',
		name: `Playlist by ${METADATA.creator}`,
		numTracks: musicPlaylist.length,
		track: musicPlaylist.map((music) => ({
			'@type': 'MusicRecording',
			name: music.title.split(' - ')[0],
			byArtist: {
				'@type': 'MusicGroup',
				name: music.artist,
			},
		})),
	}
}

const PlaylistPage = () => {
   return (
      <>
         <StructuredData id="music-playlist" data={generateStructuredData()} />
         <Container data-aos="fade-left">
            <Playlist />
         </Container>
      </>
   )
}

export default PlaylistPage
