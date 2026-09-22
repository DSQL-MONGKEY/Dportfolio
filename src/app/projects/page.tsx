import React from 'react'
import Container from '@/components/elements/Container'
import Projects from '@/modules/projects'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Projects ${METADATA.exTitle}`,
	description: `Selected projects by Dimas Prasetyo — IoT, automation, full-stack web, and mobile apps`,
	alternates: {
		canonical: `${process.env.DOMAIN}/projects`
	},
   keywords: 'portfolio projects, iot, lora tracker, mqtt, fullstack, nextjs, react native, laravel, mern stack, automation, n8n'
}

const ProjectsPage = () => {
   return (
      <Container data-aos="fade-left">
         <Projects />
      </Container>
   )
}

export default ProjectsPage