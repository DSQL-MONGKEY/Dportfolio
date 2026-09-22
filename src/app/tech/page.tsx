import React from 'react'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import Container from '@/components/elements/Container'
import Tech from '@/modules/tech'

export const metadata: Metadata = {
	title: `Tech ${METADATA.exTitle}`,
	description: `Technologies, tools, and DevOps stack I use — plus a bilingual mini quiz to test your knowledge`,
	alternates: {
		canonical: `${process.env.DOMAIN}/tech`
	},
   keywords: 'software engineer, frontend developer, reactjs, nextjs, javasript, typescript, tech stack, tools, devops, mini games, quiz'
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