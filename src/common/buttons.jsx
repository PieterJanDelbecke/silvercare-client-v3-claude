import styled from "@emotion/styled";
// import { css } from "@emotion/react";
// import { colors } from "../styles/theme";

const BaseButton = styled.button`
	cursor: pointer;
	border-radius: 100;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 4px;

	&:disabled {
		cursor: not-allowed;
	}
`;

export { BaseButton };
