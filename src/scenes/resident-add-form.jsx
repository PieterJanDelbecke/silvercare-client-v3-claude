import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

import residentsApi from "../api/residents.api";
import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { ErrorText } from "../common/layout";
import { convertDateFormat } from "../common/lib";
import { nationalityOptions, languageOptions, religionOptions } from "../data/dropdownOptions";
import {
	FormPage,
	InputsContainer,
	Grid,
	InputContainer,
	InputLabel,
	Input,
	Error,
	RadioGroup,
	ChoiceLabel,
	ChoiceInput,
	ButtonContainer,
	SubmitButton,
} from "../common/styling-forms";
import { selectOptionStyles } from "../common/select-styles";

const initialValues = {
	firstName: "",
	lastName: "",
	dob: "",
	gender: "",
	nationalities: [nationalityOptions[0]],
	languages: [languageOptions[0]],
	religions: [religionOptions[0]],
	practicingReligion: "",
};

const isValidPastDate = (value) => {
	const date = DateTime.fromFormat(value || "", "dd/MM/yyyy");
	return date.isValid && date <= DateTime.local();
};

const validationSchema = Yup.object().shape({
	firstName: Yup.string().trim().required("required"),
	lastName: Yup.string().trim().required("required"),
	dob: Yup.string().required("required").test("valid-date", "Invalid date", isValidPastDate),
	gender: Yup.string().required("required"),
	nationalities: Yup.array().min(1, "required"),
	languages: Yup.array().min(1, "required"),
	religions: Yup.array().min(1, "required"),
	practicingReligion: Yup.string().required("required"),
});

const toValues = (options) => options.map((option) => option.value);

const ResidentAddForm = () => {
	const navigate = useNavigate();
	const { addResident } = useAppData();
	const [submitError, setSubmitError] = useState(false);

	const handleFormSubmit = async (values) => {
		setSubmitError(false);
		const newResident = {
			firstName: values.firstName.trim(),
			lastName: values.lastName.trim(),
			dob: convertDateFormat(values.dob),
			gender: values.gender,
			nationalities: toValues(values.nationalities),
			languages: toValues(values.languages),
			religions: toValues(values.religions),
			practicingReligion: values.practicingReligion === "true",
		};

		try {
			const created = await residentsApi.addResident(newResident);
			addResident(created);
			navigate(`/residents/${created.id}/activities/set`);
		} catch {
			setSubmitError(true);
		}
	};

	return (
		<FormPage>
			<PageHeading>Add Resident</PageHeading>
			<InputsContainer>
				<Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={validationSchema}>
					{({
						values,
						errors,
						touched,
						submitCount,
						isSubmitting,
						handleBlur,
						handleChange,
						handleSubmit,
						setFieldValue,
					}) => {
						const errorFor = (name) => ((touched[name] || submitCount > 0) && errors[name]) || null;

						const multiSelect = (name, label, options) => (
							<InputContainer>
								<InputLabel htmlFor={name}>{label}</InputLabel>
								<Select
									inputId={name}
									options={options}
									value={values[name]}
									onChange={(selected) => setFieldValue(name, selected)}
									isMulti
									styles={selectOptionStyles}
								/>
								<Error>{errorFor(name)}</Error>
							</InputContainer>
						);

						const textInput = (name, label) => (
							<InputContainer>
								<InputLabel htmlFor={name}>{label}</InputLabel>
								<Input
									type="text"
									name={name}
									id={name}
									onBlur={handleBlur}
									onChange={handleChange}
									value={values[name]}
								/>
								<Error>{errorFor(name)}</Error>
							</InputContainer>
						);

						return (
							<form onSubmit={handleSubmit} noValidate>
								<Grid>
									{textInput("firstName", "First Name")}
									{textInput("lastName", "Last Name")}
									{textInput("dob", "Date of birth (dd/mm/yyyy)")}
									<InputContainer>
										<InputLabel as="p">Gender</InputLabel>
										<RadioGroup role="radiogroup" aria-label="Gender">
											<ChoiceLabel>
												<ChoiceInput type="radio" name="gender" value="male" /> Male
											</ChoiceLabel>
											<ChoiceLabel>
												<ChoiceInput type="radio" name="gender" value="female" /> Female
											</ChoiceLabel>
										</RadioGroup>
										<Error>{errorFor("gender")}</Error>
									</InputContainer>
									{multiSelect("nationalities", "Nationality", nationalityOptions)}
									{multiSelect("languages", "Spoken Languages", languageOptions)}
									{multiSelect("religions", "Religion", religionOptions)}
									<InputContainer>
										<InputLabel as="p">Practicing religion</InputLabel>
										<RadioGroup role="radiogroup" aria-label="Practicing religion">
											<ChoiceLabel>
												<ChoiceInput type="radio" name="practicingReligion" value="true" /> Yes
											</ChoiceLabel>
											<ChoiceLabel>
												<ChoiceInput type="radio" name="practicingReligion" value="false" /> No
											</ChoiceLabel>
										</RadioGroup>
										<Error>{errorFor("practicingReligion")}</Error>
									</InputContainer>
								</Grid>
								<ButtonContainer>
									<SubmitButton type="submit" disabled={isSubmitting}>
										{isSubmitting ? "Saving..." : "Submit"}
									</SubmitButton>
								</ButtonContainer>
							</form>
						);
					}}
				</Formik>
			</InputsContainer>
			{submitError && <ErrorText>Something went wrong, please try again.</ErrorText>}
		</FormPage>
	);
};

export default ResidentAddForm;
