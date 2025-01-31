import React from 'react'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import Container from '@/components/elements/Container'
import Tech from '@/modules/tech'

export const metadata: Metadata = {
	title: `Tech ${METADATA.exTitle}`,
	description: `Tech and tools that used to build your request`,
	alternates: {
		canonical: `${process.env.DOMAIN}/tech`
	},
   keywords: 'software engineer, frontend developer, reactjs, nextjs, javasript, typescript, tech and tools'
}


const TechPage = () => {
   return (
      <>
         <Container data-aos="fade-left">
            <Tech />
         </Container>
      </>
   )
}

export default TechPage