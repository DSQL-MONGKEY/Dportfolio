import React from 'react'
import Container from '@/components/elements/Container'
import Feeds from '@/modules/feeds'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Feeds ${METADATA.exTitle}`,
	description: `Something might you like it`,
	alternates: {
		canonical: `${process.env.DOMAIN}/feeds`
	},
   keywords: 'chatting app, social feeds, chat, feeds'
}

const FeedsPage = () => {
   return (
      <Container data-aos="fade-left">
         <Feeds />
      </Container>
   )
}

export default FeedsPage