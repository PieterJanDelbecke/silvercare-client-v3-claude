import styled from "@emotion/styled";
import { Field } from "formik";
import { colors } from "../styles/theme";

export { PrimaryButton as SubmitButton } from "./layout";

export const FormPage = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-bottom: 48px;
`;

export const InputsContainer = styled.div`
	margin: 20px;
	width: 100%;
`;

export const Grid = styled.div`
	padding-inline: 36px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-column-gap: 24px;
	grid-row-gap: 8px;

	& > div {
		grid-column: ${(props) => (props.isDesktop ? undefined : "span 4")};
	}
`;

export const InputContainer = styled.div`
	grid-column: 2 span;
`;

export const Input = styled.input`
	border-radius: 6px;
	padding-left: 14px;
	height: 40px;
	width: 100%;
	background-color: ${colors.grey[100]};
	:focus {
		outline: none;
	}
`;

export const InputLabel = styled.label`
	display: block;
	font-size: 12px;
	margin-left: 8px;
	height: 16px;
`;

export const Error = styled.p`
	font-size: 12px;
	color: ${colors.redAccent[400]};
	margin-left: 8px;
	min-height: 16px;
`;

export const RadioGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-block: 12px;
	padding-left: 12px;
`;

export const ChoiceLabel = styled.label`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 8px;
`;

export const ChoiceInput = styled(Field)`
	transform: scale(1.5);
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify || "flex-end"};
	padding-right: 36px;
`;

// Checkbox-list forms (attendance, resident activities)
export const CheckboxPage = styled(FormPage)``;

export const CheckboxInputs = styled.div`
	width: ${(props) => (props.isDesktop ? "80%" : "100%")};
	padding-left: 24px;
`;

export const CheckboxGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-block: 12px;
	padding-left: 12px;
`;

export const CheckboxItem = styled(ChoiceLabel)`
	width: ${(props) => (props.isDesktop ? "30%" : "45%")};
	margin: 6px;
`;

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
