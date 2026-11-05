/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
			screens: {
				'2xl': '1200px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Cores da logo da ISSMA: azul-marinho e dourado
				brand: {
					50: '#EEF2F9',
					100: '#D8E1F0',
					200: '#B0C2E0',
					300: '#7F9BCB',
					400: '#4E72B2',
					500: '#234B8F',
					600: '#1C3C75',
					700: '#18325F',
					800: '#1A3060',
					900: '#172B52',
					950: '#15294F',
				},
				gold: {
					300: '#F9CE6E',
					400: '#F7BC3D',
					500: '#F5AE1B',
					600: '#D9930B',
					700: '#8F5E00',
				},
				safety: '#4CC38A',
				ink: '#0F1F3D',
				sand: '#F4F6FA',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};