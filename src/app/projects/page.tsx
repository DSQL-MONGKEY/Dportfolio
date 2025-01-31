import React from 'react'
import Container from '@/components/elements/Container'
import Projects from '@/modules/projects'
import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
	title: `Projects ${METADATA.exTitle}`,
	description: `The projects that i've working on`,
	alternates: {
		canonical: `${process.env.DOMAIN}/projects`
	},
   keywords: 'twitter clone, reactjs, nextjs, typescript, javascript, mongodb, mern stack, laravel, fullstack, notion clone, projects'
}

const ProjectsPage = () => {
   return (
      <Container data-aos="fade-left">
         <Projects />
      </Container>
   )
}

export default ProjectsPage