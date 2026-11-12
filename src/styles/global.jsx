import { Global as GlobalStyling, css } from "@emotion/react";

import reset from "./reset";
import { typography } from "./theme";
import { colors } from "./theme";

const Global = () => (
	<GlobalStyling
		styles={css`
			@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap");
			${reset}

			* {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			body,
			.content {
				height: 100%;
				width: 100%;
				color: ${typography.defaultColor};
				background-color: ${colors.primary[500]};
				font-family: ${typography.fonts};
				font-weight: 400;
				letter-spacing: ${typography.letterSpacing.regular};
				flex: 1;
			}

			.app {
				display: flex;
				position: relative;
			}

			/* Scrollbar */
			::-webkit-scrollbar {
				width: 10px;
			}

			/* Track */
			::-webkit-scrollbar-track {
				background: #e0e0e0;
			}

			/* Hanlde */
			::-webkit-scrollbar-thumb {
				background: #888;
			}

			/* Handle on Hover */
			::-webkit-scrollbar-track:hover {
				background: #555;
			}
		`}
	/>
);

export default Global;
