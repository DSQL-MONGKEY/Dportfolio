import Container from "@/components/elements/Container";
import About from "@/modules/about";
import { WithContext, Person } from "schema-dts";
import StructuredData from "@/components/elements/StructuredData";
import { METADATA } from "@/common/constants/metadata";
import { LINKEDIN } from "@/common/constants/contact";
import { buildMetadata } from "@/common/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
	title: `About ${METADATA.creator} ${METADATA.exTitle}`,
	description: `Get to know ${METADATA.creator} — a software and IoT engineer from Depok, Indonesia, focused on modern, user-centered web and mobile products.`,
	path: '/about',
	keywords: 'frontend developer, software engineer, web developer, design, ui/ux, dimas prasetyo, about',
	type: 'profile',
})

function generateStructuredData(): WithContext<Person> {
	return {
		'@context': 'https://schema.org'	,
		'@type': 'Person',
		name: METADATA.authors.name,
		url: METADATA.authors.url,
		image: METADATA.profile,
		jobTitle: 'Fullstack Software Engineer',
		gender: 'Male',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Depok',
			addressRegion: 'West Java',
			addressCountry: 'ID',
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Universitas Gunadarma',
		},
		knowsAbout: [
			'TypeScript',
			'Node.js',
			'Next.js',
			'NestJS',
			'React',
			'Flutter',
			'IoT',
			'MQTT',
			'Google Cloud Platform',
		],
		award: [
			'National Finalist — GEMASTIK XVII 2024 (IoT Branch)',
			'BNSP Junior Web Programmer',
		],
		sameAs: [LINKEDIN.link, 'https://github.com/DSQL-MONGKEY'],
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
