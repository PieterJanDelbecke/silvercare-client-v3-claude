import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { fullName } from "../common/lib";
import {
	FormPage,
	InputsContainer,
	Grid,
	InputContainer,
	InputLabel,
	Input,
	Error,
	ButtonContainer,
	SubmitButton,
} from "../common/styling-forms";
import { selectOptionStyles } from "../common/select-styles";
import type { SelectOption } from "../types";

interface FormValues {
	activity: SelectOption | null;
	teamMember: SelectOption | null;
	date: string;
	comment: string;
}

const validationSchema = Yup.object().shape({
	activity: Yup.object().nullable().required("required"),
	teamMember: Yup.object().nullable().required("required"),
	date: Yup.string().required("required"),
});

// Step 1 of the "new activity" wizard. The draft is kept in shared state for the next step.
const ActivityNewForm = () => {
	const navigate = useNavigate();
	const { activities, teamMembers, activityDraft, setActivityDraft } = useAppData();

	const activityOptions: SelectOption[] = activities
		.filter((activity) => !activity.removed)
		.map((activity) => ({ value: activity.id, label: activity.activity }));
	const teamOptions: SelectOption[] = teamMembers.map((member) => ({ value: member.id, label: fullName(member) }));

	// Coming back from the attendance step restores what was entered before.
	const initialValues: FormValues = {
		activity: activityDraft?.activity ?? activityOptions[0] ?? null,
		teamMember: teamOptions.find((option) => option.value === activityDraft?.teamMemberId) ?? teamOptions[0] ?? null,
		date: activityDraft?.date ?? "",
		comment: activityDraft?.comment ?? "",
	};

	const handleFormSubmit = (values: FormValues) => {
		// Guaranteed by the validation schema.
		if (!values.activity || !values.teamMember) return;
		setActivityDraft({
			activity: values.activity,
			teamMemberId: values.teamMember.value,
			date: values.date,
			comment: values.comment.trim(),
		});
		navigate("/activities/new/attendance");
	};

	return (
		<FormPage>
			<PageHeading>New Activity</PageHeading>
			<InputsContainer>
				<Formik<FormValues> onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={validationSchema}>
					{({ values, errors, touched, submitCount, handleBlur, handleChange, handleSubmit, setFieldValue }) => {
						const errorFor = (name: keyof FormValues) => {
							const error = errors[name];
							return (touched[name] || submitCount > 0) && typeof error === "string" ? error : null;
						};

						return (
							<form onSubmit={handleSubmit} noValidate>
								<Grid>
									<InputContainer>
										<InputLabel htmlFor="activity">Activity</InputLabel>
										<Select
											inputId="activity"
											options={activityOptions}
											value={values.activity}
											onChange={(option) => setFieldValue("activity", option)}
											styles={selectOptionStyles}
										/>
										<Error>{errorFor("activity")}</Error>
									</InputContainer>
									<InputContainer>
										<InputLabel htmlFor="date">Date</InputLabel>
										<Input
											type="date"
											name="date"
											id="date"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.date}
										/>
										<Error>{errorFor("date")}</Error>
									</InputContainer>
									<InputContainer>
										<InputLabel htmlFor="teamMember">Team Member</InputLabel>
										<Select
											inputId="teamMember"
											options={teamOptions}
											value={values.teamMember}
											onChange={(option) => setFieldValue("teamMember", option)}
											styles={selectOptionStyles}
										/>
										<Error>{errorFor("teamMember")}</Error>
									</InputContainer>
									<InputContainer>
										<InputLabel htmlFor="comment">Comment</InputLabel>
										<Input
											type="text"
											name="comment"
											id="comment"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.comment}
										/>
									</InputContainer>
								</Grid>
								<ButtonContainer>
									<SubmitButton type="submit">Next</SubmitButton>
								</ButtonContainer>
							</form>
						);
					}}
				</Formik>
			</InputsContainer>
		</FormPage>
	);
};

export default ActivityNewForm;
