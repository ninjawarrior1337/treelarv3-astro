/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                muse: "#e4007f",
                aqours: "#009fe8",
                niji: "#fab920",
                treelar: "#3399ff"
            }
		},
	},
	plugins: [],
}
