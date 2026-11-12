import { colors } from "../styles/theme";

// react-select styles itself with inline CSS-in-JS, which overrides Tailwind classes,
// so its look is set through its `styles` API using the shared theme colors.
export const selectOptionStyles = {
	container: (baseStyles) => ({
		...baseStyles,
		backgroundColor: colors.grey[100],
		borderRadius: "6px",
	}),
	control: (baseStyles) => ({
		...baseStyles,
		backgroundColor: colors.grey[100],
	}),
	option: (baseStyles) => ({
		...baseStyles,
		color: "black",
	}),
	multiValueLabel: (baseStyles) => ({
		...baseStyles,
		backgroundColor: colors.greenAccent[500],
		fontSize: "16px",
		borderRadius: "2px 0px 0px 2px",
	}),
	multiValueRemove: (baseStyles) => ({
		...baseStyles,
		backgroundColor: colors.greenAccent[500],
		borderRadius: "0px 2px 2px 0px",
	}),
};
