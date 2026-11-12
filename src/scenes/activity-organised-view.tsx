import { Link } from "react-router-dom";

import { PageHeading, Subheading, Body } from "../common/typography";
import { PageContainer, Card, AccentHeading } from "../common/layout";
import { formatDate, fullName } from "../common/lib";
import useOrganisedActivity from "../hooks/useOrganisedActivity";
import AsyncContent from "./components/AsyncContent";

const ActivityOrganisedView = () => {
	const state = useOrganisedActivity();

	return (
		<PageContainer>
			<PageHeading>Organised Activity</PageHeading>
			<AsyncContent state={state} notFoundMessage="Activity not found.">
				{(activity) => (
					<>
						<Card className="flex-col gap-1">
							<AccentHeading>{activity.activityName}</AccentHeading>
							<Body>Date: {formatDate(activity.date)}</Body>
							<Body>Organised by: {activity.teamMember ? fullName(activity.teamMember) : "-"}</Body>
							<Body>Comment: {activity.comment || "-"}</Body>
						</Card>
						<Card className="flex-col gap-1">
							<Subheading className="mb-2 font-medium text-green-accent-500">
								Participants ({activity.participants.length})
							</Subheading>
							{activity.participants.map((resident) => (
								<Link
									key={resident.id}
									to={`/residents/${resident.id}`}
									className="block leading-6 hover:text-blue-accent-400"
								>
									{fullName(resident)}
								</Link>
							))}
						</Card>
					</>
				)}
			</AsyncContent>
		</PageContainer>
	);
};

export default ActivityOrganisedView;
