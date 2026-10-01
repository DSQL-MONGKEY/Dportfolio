import React from 'react'
import { Metadata } from "next";
import { WithContext, ItemList } from "schema-dts";
import { METADATA } from "@/common/constants/metadata";
import { buildMetadata } from "@/common/lib/seo";
import { aiTools, devOps, tech, tools } from "@/common/constants/constants";
import Container from '@/components/elements/Container'
import StructuredData from '@/components/elements/StructuredData'
import Tech from '@/modules/tech'

export const metadata: Metadata = buildMetadata({
	title: `Tech Stack ${METADATA.exTitle}`,
	description: `Technologies, tools, DevOps, and AI workflow I use — plus a bilingual mini quiz to test your knowledge.`,
	path: '/tech',
	keywords: 'software engineer, frontend developer, reactjs, nextjs, javasript, typescript, tech stack, tools, devops, opencode, claude code, openrouter, ai workflow, mini games, quiz',
})

function generateStructuredData(): WithContext<ItemList> {
	const allTech = [...tech, ...tools, ...devOps, ...aiTools]

	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Tech stack of Dimas Prasetyo',
		itemListElement: allTech.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'SoftwareApplication',
				name: item.title,
			},
		})),
	}
}

const TechPage = () => {
   return (
      <>
         <StructuredData id="tech-list" data={generateStructuredData()} />
         <Container data-aos="fade-left">
            <Tech />
         </Container>
      </>
   )
}

export default TechPage
