/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"heading": ['"Raleway"', "sans-serif"],
				// #### Body
				"body": ['"Open Sans"', "serif"],
			},
			fontWeight: {
				"regular-raleway": 400,
				"bold-raleway": 700,
				// #### Body
				"regular-sans": 400,
			},
			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				// ### Primary
				"dark-blue-1": "hsl(217, 28%, 15%)", //(intro and email sign up background)
				"dark-blue-2": "hsl(218, 28%, 13%)", //(main background)
				"dark-blue-3": "hsl(216, 53%, 9%)", //(footer background)
				"dark-blue-4": "hsl(219, 30%, 18%)", //(testimonials background)
				// ### Accent
				"cyan": "hsl(176, 68%, 64%)",
				"blue": "hsl(198, 60%, 50%)",
				"light-red": "hsl(0, 100%, 63%)",
				// ### Neutral
				"white-neutral": "hsl(0, 0%, 100%)"
			},
			// ## Shadows
			boxShadow: {

				"testimonial": "0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
			},
		},

	},
	plugins: [],
}
