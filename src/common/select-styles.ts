import type { CSSObjectWithLabel } from "react-select";
import { colors } from "../styles/theme";

// react-select styles itself with inline CSS-in-JS, which overrides Tailwind classes,
// so its look is set through its `styles` API using the shared theme colors.
// Works for both single and multi selects with any option type.
export const selectOptionStyles = {
	container: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		backgroundColor: colors.grey[100],
		borderRadius: "6px",
	}),
	control: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		backgroundColor: colors.grey[100],
	}),
	option: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		color: "black",
	}),
	multiValueLabel: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		backgroundColor: colors.greenAccent[500],
		fontSize: "16px",
		borderRadius: "2px 0px 0px 2px",
	}),
	multiValueRemove: (baseStyles: CSSObjectWithLabel) => ({
		...baseStyles,
		backgroundColor: colors.greenAccent[500],
		borderRadius: "0px 2px 2px 0px",
	}),
};
