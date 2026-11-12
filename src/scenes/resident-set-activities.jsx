import { useNavigate, useParams } from "react-router-dom";

import residentsApi from "../api/residents.api";
import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { ErrorText } from "../common/layout";
import { CheckboxPage } from "../common/styling-forms";
import { findById, fullName } from "../common/lib";
import CheckboxListForm from "./components/CheckboxListForm";

// Step 2 of adding a resident: pick the activities they're interested in.
const ResidentSetActivities = () => {
	const navigate = useNavigate();
	const { residentId } = useParams();
	const { residents, activities } = useAppData();
	const resident = findById(residents, residentId);

	const options = activities
		.filter((activity) => !activity.removed)
		.map((activity) => ({ id: activity.id, label: activity.activity }));

	const handleSubmit = async (selectedIds) => {
		await residentsApi.addResidentActivities({ residentId: resident.id, activityIds: selectedIds.map(Number) });
		navigate(`/residents/${resident.id}/created`);
	};

	return (
		<CheckboxPage>
			<PageHeading>Interest in Activities</PageHeading>
			{resident ? (
				<CheckboxListForm title={fullName(resident)} options={options} onSubmit={handleSubmit} />
			) : (
				<ErrorText>Resident not found.</ErrorText>
			)}
		</CheckboxPage>
	);
};

export default ResidentSetActivities;
