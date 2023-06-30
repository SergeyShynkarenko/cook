/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.js", "./src/**/*.vue", "./*.html", "./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			regular: ["JostRegular", "Arial", "sans-serif"],
			medium: ["JostMedium", "Arial", "sans-serif"],
			semiBold: ["JostSemiBold", "Arial", "sans-serif"],
			bold: ["JostBold", "Arial", "sans-serif"],
			boldItalic: ["JostBoldItalic", "Arial", "sans-serif"]
		},
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			pastelGreen: "#38BDAE",
			pastelOrange: "#F58773",
			futurePink: "#EF3E59"
		},
		extend: {
			keyframes: {
				"trans-rotate": {
					"100%": { transform: "rotate(360deg)" }
				}
			},
			animation: {
				"trans-rotate": "trans-rotate 25s linear infinite"
			},
			screens: {
				xs: "450px",
				sm: "640px",
				md: "769px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
				"3xl": "2560px"
			},

			gridTemplateRows: {
				8: "repeat(8, minmax(0, 1fr))"
			}
		}
	},
	plugins: []
};
