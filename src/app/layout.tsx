import type { Metadata } from "next";
import "./globals.css";
import Layouts from "@/components/layouts";
import ThemeProviderContext from "@/stores/theme";


export const metadata: Metadata = {
  title: "Dportfolio",
  description: "Created with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body>
				<ThemeProviderContext>
					<Layouts>
						{children}
					</Layouts>
				</ThemeProviderContext>
			</body>
		</html>
	);
}
