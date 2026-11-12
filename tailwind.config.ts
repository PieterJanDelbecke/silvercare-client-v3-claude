import type { Config } from "tailwindcss";
import { colors, elevation } from "./src/styles/theme";

// Colors live in src/styles/theme.ts so the charts and react-select (which need JS values) share them.
// Keys become class names, e.g. `bg-primary-400`, `text-green-accent-500`.

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		// The app's own breakpoints (`desktop` matches the old `mediaQueryMinWidth`).
		screens: {
			tablet: "721px",
			laptop: "1097px",
			desktop: "1200px",
		},
		extend: {
			colors: {
				grey: colors.grey,
				primary: colors.primary,
				"green-accent": colors.greenAccent,
				"red-accent": colors.redAccent,
				"blue-accent": colors.blueAccent,
			},
			fontFamily: {
				sans: ['"Source Sans 3"', "sans-serif"],
			},
			boxShadow: Object.fromEntries(Object.entries(elevation).map(([level, value]) => [`elevation-${level}`, value])),
		},
	},
	plugins: [],
} satisfies Config;
