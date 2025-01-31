import Container from "@/components/elements/Container";
import About from "@/modules/about";
import { WithContext, Person } from "schema-dts";
import StructuredData from "@/components/elements/StructuredData";
import { METADATA } from "@/common/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `About ${METADATA.exTitle}`,
	description: `A little piece of ${METADATA.creator}`,
	alternates: {
		canonical: `${process.env.DOMAIN}/about`
	},
	keywords: 'frontend developer, software engineer, web developer, design, ui/ux, dimas prasetyo, about'
}

function generateStructuredData(): WithContext<Person> {
	return {
		'@context': 'https://schema.org'	,
		'@type': 'Person',
		name: METADATA.authors.name,
		url: METADATA.authors.url,
		image: METADATA.profile,
		jobTitle: 'Software Engineer',
		gender: 'Male'
	}
}

export default function AboutPage() {
	return (
		<>
			<StructuredData data={generateStructuredData()} />
			<Container data-aos="fade-left">
				<About />
			</Container>
		</>
	);
}
