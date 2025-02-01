import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layouts from "@/components/layouts";
import ThemeProviderContext from "@/stores/theme";
import { Suspense } from "react";
import { METADATA } from "@/common/constants/metadata";


export const metadata: Metadata = {
	applicationName: "dimpfes",
	manifest: '/manifest.json',
	appleWebApp: {
		title: 'dimpfes',
		capable: true,
		statusBarStyle: 'default'
	},
	formatDetection: {
		telephone: false,
	},
	metadataBase: new URL(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.DOMAIN || ''),
	description: METADATA.description,
	keywords: METADATA.keyword,
	creator: METADATA.creator,
	authors: {
		name: METADATA.authors.name,
		url: METADATA.authors.url
	},
	openGraph: {
		images: METADATA.profile,
		url: METADATA.openGraph.url,
		siteName: METADATA.openGraph.siteName,
		locale: METADATA.openGraph.locale,
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: [
		{
			url: 'img/logo-192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			url: 'img/logo-384.png',
			sizes: '384x384',
			type: 'image/png'
		},
		{
			url: 'img/logo-512.png',
			sizes: '192x192',
			type: 'image/png'
		},
	]
};

export const themeColor:Viewport = {
	themeColor: '#1D2B53'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-main dark:bg-mainDark transition-colors ease-in-out duration-75">
				<ThemeProviderContext>
					<Suspense>
						<Layouts>
							{children}
						</Layouts>
					</Suspense>
				</ThemeProviderContext>
			</body>
		</html>
	);
}
