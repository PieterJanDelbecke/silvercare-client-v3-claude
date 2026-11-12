const colors = {
	grey: {
		100: "#e0e0e0",
		200: "#c2c2c2",
		300: "#a3a3a3",
		400: "#858585",
		500: "#666666",
		600: "#525252",
		700: "#3d3d3d",
		800: "#292929",
		900: "#141414",
	},
	primary: {
		100: "#d0d1d5",
		200: "#a1a4ab",
		300: "#727681",
		400: "#1F2A40",
		500: "#141b2d",
		600: "#101624",
		700: "#0c101b",
		800: "#080b12",
		900: "#040509",
	},
	greenAccent: {
		100: "#dbf5ee",
		200: "#b7ebde",
		300: "#94e2cd",
		400: "#70d8bd",
		500: "#4cceac",
		600: "#3da58a",
		700: "#2e7c67",
		800: "#1e5245",
		900: "#0f2922",
	},
	redAccent: {
		100: "#f8dcdb",
		200: "#f1b9b7",
		300: "#e99592",
		400: "#e2726e",
		500: "#db4f4a",
		600: "#af3f3b",
		700: "#832f2c",
		800: "#58201e",
		900: "#2c100f",
	},
	blueAccent: {
		100: "#e1e2fe",
		200: "#c3c6fd",
		300: "#a4a9fc",
		400: "#868dfb",
		500: "#6870fa",
		600: "#535ac8",
		700: "#3e4396",
		800: "#2a2d64",
		900: "#151632",
	},
};

const typography = {
	fonts: ['"Source Sans 3"', "sans-serif"].join(","),
	size: {
		s1: "12px",
		s2: "14px",
		s3: "16px",
		m1: "20px",
		m2: "24px",
		m3: "28px",
		l1: "32px",
		l2: "36px",
		l3: "40px",
		l4: "48px",
	},
	letterSpacing: { regular: "0.1px", wide: "2px" },
	defaultColor: colors.grey[100],
};

const spacers = {
	desktop: {
		xxs: "4px",
		xs: "8px",
		s: "16px",
		m: "32px",
		l: "40px",
		xl: "64px",
		xxl: "96px",
	},
	tablet: {},
	mobile: {},
};

const grid = {
	xl: {
		min: "1520px",
		max: "2152px",
		cols: 12,
		gutter: "24px",
		margin: "32px",
	},
	large: {
		min: "1280px",
		max: "1520px",
		cols: 12,
		gutter: "24px",
		margin: "32px",
	},
	desktop: {
		min: "1096px",
		max: "1280px",
		cols: 12,
		gutter: "24px",
		margin: "32px",
	},
	tablet: {
		min: "720px",
		max: "1096px",
		cols: 8,
		gutter: "16px",
		margin: "24px",
	},
	mobile: {
		min: "375px",
		max: "720px",
		cols: 4,
		gutter: "12px",
		margin: "16px",
	},
};

const elevation = {
	100: "0px 1px 3px 1px #8B92A21A, 0px 1px 2px 0px #8B92A21A",
	200: "0px 2px 6px 2px #8B92A21A, 0px 1px 2px 0px #8B92A21A",
	300: "0px 1px 3px 0px #8B92A21A, 0px 4px 8px 3px #8B92A21A",
	400: "0px 2px 3px 0px #8B92A21A, 0px 6px 10px 4px #8B92A21A",
	500: "0px 2px 3px 0px #8B92A21A, 0px 8px 12px 6px #8B92A21A",
};

const constants = {
	sideMenuWidth: "89px",
};

export { colors, typography, spacers, grid, elevation, constants };
