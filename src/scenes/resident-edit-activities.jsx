import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import residentsApi from "../api/residents.api";
import useAsync from "../hooks/useAsync";
import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { ErrorText } from "../common/layout";
import { CheckboxPage } from "../common/styling-forms";
import { findById, fullName } from "../common/lib";
import CheckboxListForm from "./components/CheckboxListForm";
import AsyncContent from "./components/AsyncContent";

const ResidentEditActivities = () => {
	const navigate = useNavigate();
	const { residentId } = useParams();
	const { residents } = useAppData();
	const resident = findById(residents, residentId);

	const state = useAsync(useCallback(() => residentsApi.getResidentActivities(residentId), [residentId]));

	const handleSubmit = async (selectedIds) => {
		await residentsApi.editResidentActivities(resident.id, selectedIds.map(Number));
		navigate(`/residents/${resident.id}`);
	};

	if (!resident) {
		return (
			<CheckboxPage>
				<ErrorText>Resident not found.</ErrorText>
			</CheckboxPage>
		);
	}

	return (
		<CheckboxPage>
			<PageHeading>Edit Activities</PageHeading>
			<AsyncContent state={state}>
				{({ activities }) => (
					<CheckboxListForm
						title={fullName(resident)}
						options={activities.map((activity) => ({ id: activity.id, label: activity.name }))}
						initialSelectedIds={activities.filter((activity) => activity.selected).map((activity) => String(activity.id))}
						onSubmit={handleSubmit}
					/>
				)}
			</AsyncContent>
		</CheckboxPage>
	);
};

export default ResidentEditActivities;
