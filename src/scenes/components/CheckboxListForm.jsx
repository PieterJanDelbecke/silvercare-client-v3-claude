import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";

import { mediaQueryMinWidth } from "../../common/lib";
import { Subheading } from "../../common/typography";
import { ErrorText } from "../../common/layout";
import { colors } from "../../styles/theme";
import {
	CheckboxInputs,
	CheckboxGrid,
	CheckboxItem,
	ChoiceInput,
	Error,
	ButtonContainer,
	SubmitButton,
} from "../../common/styling-forms";

const Title = styled(Subheading)`
	padding-bottom: 8px;
	padding-left: 24px;
	color: ${colors.greenAccent[500]};
`;

const FIELD = "selectedIds";

const validationSchema = Yup.object().shape({
	[FIELD]: Yup.array().min(1, "select at least one option"),
});

/**
 * A titled list of checkboxes with "select at least one" validation.
 * `options` are { id, label }; `onSubmit` receives the selected ids as strings and may throw.
 */
const CheckboxListForm = ({ title, options, initialSelectedIds = [], submitLabel = "Submit", onSubmit }) => {
	const isDesktop = useMediaQuery(mediaQueryMinWidth);
	const [submitError, setSubmitError] = useState(false);

	const handleSubmit = async (values) => {
		setSubmitError(false);
		try {
			await onSubmit(values[FIELD]);
		} catch {
			setSubmitError(true);
		}
	};

	return (
		<CheckboxInputs isDesktop={isDesktop}>
			<Title>{title}</Title>
			<Formik
				onSubmit={handleSubmit}
				initialValues={{ [FIELD]: initialSelectedIds }}
				validationSchema={validationSchema}
			>
				{({ errors, touched, isSubmitting, handleSubmit: submit }) => (
					<form onSubmit={submit}>
						<CheckboxGrid role="group" aria-label={title}>
							{options.map((option) => (
								<CheckboxItem isDesktop={isDesktop} key={option.id}>
									<ChoiceInput type="checkbox" name={FIELD} value={String(option.id)} />
									{option.label}
								</CheckboxItem>
							))}
						</CheckboxGrid>
						<Error>{touched[FIELD] && errors[FIELD] ? errors[FIELD] : null}</Error>
						{submitError && <ErrorText>Something went wrong, please try again.</ErrorText>}
						<ButtonContainer justify="center">
							<SubmitButton type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Saving..." : submitLabel}
							</SubmitButton>
						</ButtonContainer>
					</form>
				)}
			</Formik>
		</CheckboxInputs>
	);
};

export default CheckboxListForm;
