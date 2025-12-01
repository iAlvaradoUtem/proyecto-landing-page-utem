/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				utem: {
					blue: '#003057',
					green: '#00854A',
					gray: '#D6D6D6',
				}
			},
			fontFamily: {
				serif: ['"Merriweather"', 'serif'],
				sans: ['"Inter"', 'sans-serif'],
			}
		},
	},
	plugins: [],
}