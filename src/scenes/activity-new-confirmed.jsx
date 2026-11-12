import { PageContainer } from "../common/layout";
import { formatDate } from "../common/lib";
import useOrganisedActivity from "../hooks/useOrganisedActivity";
import AsyncContent from "./components/AsyncContent";
import SuccessPanel from "./components/SuccessPanel";

// Step 3 of the "new activity" wizard.
const ActivityNewConfirmed = () => {
	const state = useOrganisedActivity();

	return (
		<PageContainer>
			<AsyncContent state={state} notFoundMessage="Activity not found.">
				{(activity) => (
					<SuccessPanel
						title={activity.activityName}
						subtitle={formatDate(activity.date)}
						viewPath={`/activities/${activity.id}`}
						links={[
							{ label: "Add Activity", icon: "form", to: "/activities/new" },
							{ label: "Dashboard", icon: "home", to: "/" },
						]}
					/>
				)}
			</AsyncContent>
		</PageContainer>
	);
};

export default ActivityNewConfirmed;
