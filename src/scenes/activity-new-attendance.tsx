import { Navigate, useNavigate } from "react-router-dom";

import activitiesApi from "../api/activities.api";
import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { OutlineButton } from "../common/layout";
import { CheckboxPage } from "../common/styling-forms";
import { fullName } from "../common/lib";
import CheckboxListForm from "./components/CheckboxListForm";

// Step 2 of the "new activity" wizard: tick the residents who attended, then save.
const ActivityNewAttendance = () => {
	const navigate = useNavigate();
	const { residents, activityDraft, setActivityDraft, reload } = useAppData();

	// Opened directly (refresh, bookmark) without step 1: start the wizard from the beginning.
	if (!activityDraft) {
		return <Navigate to="/activities/new" replace />;
	}

	const options = residents.map((resident) => ({ id: resident.id, label: fullName(resident) }));

	const handleSubmit = async (attendingResidentIds: string[]) => {
		const { activity, teamMemberId, date, comment } = activityDraft;
		const created = await activitiesApi.newActivity({
			activityId: activity.value,
			teamMemberId,
			date,
			comment,
			attendingResidentIds,
		});
		navigate(`/activities/${created.id}/confirmed`);
		setActivityDraft(null);
		reload(); // refresh the dashboard's "last organised activities"
	};

	return (
		<CheckboxPage>
			<PageHeading>Attending Residents</PageHeading>
			<OutlineButton onClick={() => navigate("/activities/new")}>Back</OutlineButton>
			<CheckboxListForm title={activityDraft.activity.label} options={options} onSubmit={handleSubmit} />
		</CheckboxPage>
	);
};

export default ActivityNewAttendance;
