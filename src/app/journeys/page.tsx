import React from 'react'
import Container from '@/components/elements/Container'
import Journeys from '@/modules/journey'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Journeys ${METADATA.exTitle}`,
	description: `My journeys`,
	alternates: {
		canonical: `${process.env.DOMAIN}/journeys`
	},
   keywords: 'software engineering, bangkit academy, cimb niaga, software tester, lembaga pengembangan komputer univeristas gunadarma, lepkom ug, smk citra negara, journeys'
}

const JourneysPage = () => {
   return (
      <Container data-aos="fade-left">
         <Journeys />
      </Container>
   )
}

export default JourneysPage