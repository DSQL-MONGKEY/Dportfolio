import type { Config } from "tailwindcss";

const config: Config = {
		darkMode: ["class"],
		content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'main': '#F6F54D',
				'mainDark': '#1D2B53',
				'calmBlue': '#6895D2',
				'shineRed': '#F55353',
				
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"trail": {
					"0%": { "--angle": "0deg" },
					"100%": { "--angle": "360deg" },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				slide: {
					'0%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(-100%)' },
					'90%': { transform: 'translateX(5%)' },
					'100%': { transform: 'translateX(0)' }
				},
				slideInfinite: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-300%)' }
				},
				rainArrow: {
					'0%': { transform: 'translateY(-10%)' },
					'50%': { transform: 'translateY(10%)' },
					'100%': { transform: 'translateY(-10%)' }
				},
				enterLeft: {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				rightInfinite: {
					'0%': { transform: 'translateX(-150px)' },
					'100%': { transform: 'translateX(150px)' }
				},
			},
			animation: {
				"trail": "trail var(--duration) linear infinite",
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-card': 'slide 3s 3s ease-in-out',
				'slide-infinite': 'slideInfinite 100s linear infinite',
				'rain-arrow': 'rainArrow 1s ease-out infinite',
				'enter-left': 'enterLeft 0.5s ease-in-out',
				'right-infinite': 'rightInfinite 2s linear infinite'
			},
		},
		fontFamily: {
			outfit: ['var(--font-outfit)'],
			paytone: ['var(--font-paytone)']
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
};
export default config;
