import { Metadata } from "next";
import { METADATA } from "@/common/constants/metadata";
import { WithContext, Person } from "schema-dts";
import Container from "@/components/elements/Container";
import StructuredData from "@/components/elements/StructuredData";
import Home from "@/modules/home/index";

export const metadata: Metadata = {
	title: `${METADATA.creator} | Personal Website`,
	description: `Dimas Prasetyo — Software / IoT Engineer building modern web, mobile, and connected-device products. Projects, services, and ways to get in touch.`,
	alternates: {
		canonical: process.env.DOMAIN
	},
	keywords: 'dimas prasetyo, software engineer, iot engineer, frontend developer, nextjs, react native, typescript, freelance developer, portfolio'
}

function generateStructureData(): WithContext<Person> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: METADATA.authors.name,
		url: METADATA.authors.url,
		image: METADATA.profile,
		jobTitle: 'Software Engineer',
		gender: 'Male'
	}
}

export default function HomePage() {
	return (
		<>
			<StructuredData data={generateStructureData()} />
			<Container data-aos="fade-left">
				<Home />
			</Container>
		</>
	);
}
