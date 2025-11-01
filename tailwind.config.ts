import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	safelist: [
		// Neo-brutalist color variants for thought leadership cards
		'hover:bg-primary',
		'hover:bg-cobalt',
		'hover:bg-accent',
		'hover:bg-oxblood',
		'group-hover:bg-primary',
		'group-hover:bg-cobalt',
		'group-hover:bg-accent',
		'group-hover:bg-oxblood',
		'group-hover:!text-foreground',
		'group-hover:!text-white',
		'group-hover:text-primary-foreground',
		'group-hover:text-cobalt-foreground',
		'group-hover:text-accent-foreground',
		'group-hover:text-oxblood-foreground',
		'group-hover:!border-primary',
		'group-hover:!border-cobalt',
		'group-hover:!border-accent',
		'group-hover:!border-oxblood',
		'group-hover:border-primary',
		'group-hover:border-cobalt',
		'group-hover:border-accent',
		'group-hover:border-oxblood',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
			},
		colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))',
				text: 'hsl(var(--primary-text))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			},
			/* Neo-brutalist extended colors */
			cobalt: {
				DEFAULT: 'hsl(var(--cobalt))',
				foreground: 'hsl(var(--cobalt-foreground))'
			},
			oxblood: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			/* Accessibility-focused color additions */
			focus: {
				ring: 'hsl(var(--focus-ring))',
				offset: 'hsl(var(--focus-offset))'
			}
		},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'confetti-physics': {
					'0%': {
						transform: 'translate(0, 0) rotate(0deg) scale(1)',
						opacity: '1'
					},
					'8%': {
						transform: 'translate(calc(var(--drift-x, 0) * 5vw + var(--wobble, 1) * 1.5vw), -40vh) rotate(calc(var(--rotation-speed, 540deg) * 0.08)) scale(1.12)',
						opacity: '1'
					},
					'16%': {
						transform: 'translate(calc(var(--drift-x, 0) * 12vw - var(--wobble, 1) * 2vw), -65vh) rotate(calc(var(--rotation-speed, 540deg) * 0.16)) scale(1.08)',
						opacity: '1'
					},
					'28%': {
						transform: 'translate(calc(var(--drift-x, 0) * 22vw + var(--wobble, 1) * 2.5vw), -75vh) rotate(calc(var(--rotation-speed, 540deg) * 0.28)) scale(1.02)',
						opacity: '1'
					},
					'45%': {
						transform: 'translate(calc(var(--drift-x, 0) * 40vw * var(--spread-multiplier, 1) - var(--wobble, 1) * 2vw), 5vh) rotate(calc(var(--rotation-speed, 540deg) * 0.45)) scale(0.98)',
						opacity: '1'
					},
					'65%': {
						transform: 'translate(calc(var(--drift-x, 0) * 62vw * var(--spread-multiplier, 1) + var(--wobble, 1) * 1.5vw), 55vh) rotate(calc(var(--rotation-speed, 540deg) * 0.65)) scale(0.92)',
						opacity: '0.95'
					},
					'85%': {
						transform: 'translate(calc(var(--drift-x, 0) * 82vw * var(--spread-multiplier, 1) - var(--wobble, 1) * 1vw), 95vh) rotate(calc(var(--rotation-speed, 540deg) * 0.85)) scale(0.82)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translate(calc(var(--drift-x, 0) * 98vw * var(--spread-multiplier, 1)), 135vh) rotate(var(--rotation-speed, 540deg)) scale(0.7)',
						opacity: '0'
					}
				},
				'parallax-hover': {
					'0%': {
						'--tw-translate-x': '0px',
						'--tw-translate-y': '0px',
						'--tw-rotate': '0deg'
					},
					'100%': {
						'--tw-translate-x': 'var(--p-x, 0px)',
						'--tw-translate-y': 'var(--p-y, 0px)',
						'--tw-rotate': 'var(--p-rot, 0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'confetti-physics': 'confetti-physics 4.7s cubic-bezier(0.33, 0.01, 0.48, 1) forwards',
				'parallax-hover': 'parallax-hover 0.3s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
