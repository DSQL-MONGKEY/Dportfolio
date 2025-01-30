import type { Metadata } from "next";
import "./globals.css";
import Layouts from "@/components/layouts";
import ThemeProviderContext from "@/stores/theme";
import { Suspense } from "react";


export const metadata: Metadata = {
	title: "Dimas Prasetyo | Portfolio Website",
	description: "Created with love",
	
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className="bg-main dark:bg-mainDark transition-colors ease-in-out duration-300">
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
