/** @type {import('tailwindcss').Config} */
export default {
	content: ['*.html'],
	theme: {
		extend: {
			backgroundImage: {
				menu: 'url("../assets/menu.jpg")',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
}