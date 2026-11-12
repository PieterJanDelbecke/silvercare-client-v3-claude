import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Subheading } from "../../common/typography";
import { ErrorText } from "../../common/layout";
import {
	CheckboxInputs,
	CheckboxGrid,
	CheckboxItem,
	ChoiceInput,
	Error,
	ButtonContainer,
	SubmitButton,
} from "../../common/styling-forms";

const FIELD = "selectedIds";

const validationSchema = Yup.object().shape({
	[FIELD]: Yup.array().min(1, "select at least one option"),
});

/**
 * A titled list of checkboxes with "select at least one" validation.
 * `options` are { id, label }; `onSubmit` receives the selected ids as strings and may throw.
 */
const CheckboxListForm = ({ title, options, initialSelectedIds = [], submitLabel = "Submit", onSubmit }) => {
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
		<CheckboxInputs>
			<Subheading className="pb-2 pl-6 text-green-accent-500">{title}</Subheading>
			<Formik
				onSubmit={handleSubmit}
				initialValues={{ [FIELD]: initialSelectedIds }}
				validationSchema={validationSchema}
			>
				{({ errors, touched, isSubmitting, handleSubmit: submit }) => (
					<form onSubmit={submit}>
						<CheckboxGrid role="group" aria-label={title}>
							{options.map((option) => (
								<CheckboxItem key={option.id}>
									<ChoiceInput type="checkbox" name={FIELD} value={String(option.id)} />
									{option.label}
								</CheckboxItem>
							))}
						</CheckboxGrid>
						<Error>{touched[FIELD] && errors[FIELD] ? errors[FIELD] : null}</Error>
						{submitError && <ErrorText>Something went wrong, please try again.</ErrorText>}
						<ButtonContainer className="justify-center">
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
