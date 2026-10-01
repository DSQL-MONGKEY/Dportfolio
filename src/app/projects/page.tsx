import React from 'react'
import { Metadata } from "next";
import Container from '@/components/elements/Container'
import Projects from '@/modules/projects'
import StructuredData from '@/components/elements/StructuredData'
import { WithContext, ItemList } from "schema-dts";
import { METADATA } from "@/common/constants/metadata";
import { buildMetadata } from "@/common/lib/seo";
import { projects } from "@/common/constants/constants";

export const metadata: Metadata = buildMetadata({
	title: `Projects ${METADATA.exTitle}`,
	description: `Selected projects by Dimas Prasetyo — IoT, automation, full-stack web, and mobile apps.`,
	path: '/projects',
	keywords: 'portfolio projects, iot, lora tracker, mqtt, fullstack, nextjs, react native, laravel, mern stack, automation, n8n',
})

function generateStructuredData(): WithContext<ItemList> {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Projects by Dimas Prasetyo',
		itemListElement: projects.map((project, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'CreativeWork',
				name: project.title,
				description: project.desc,
				...(project.link ? { url: project.link } : {}),
			},
		})),
	}
}

const ProjectsPage = () => {
   return (
      <>
         <StructuredData id="projects-list" data={generateStructuredData()} />
         <Container data-aos="fade-left">
            <Projects />
         </Container>
      </>
   )
}

export default ProjectsPage
