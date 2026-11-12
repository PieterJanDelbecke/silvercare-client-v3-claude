import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { PageHeading, Subheading, Body } from "../common/typography";
import { PageContainer, Card, AccentHeading } from "../common/layout";
import { formatDate, fullName } from "../common/lib";
import { colors } from "../styles/theme";
import useOrganisedActivity from "../hooks/useOrganisedActivity";
import AsyncContent from "./components/AsyncContent";

const DetailsCard = styled(Card)`
	flex-direction: column;
	gap: 4px;
`;

const SectionHeading = styled(Subheading)`
	font-weight: 500;
	color: ${colors.greenAccent[500]};
	margin-bottom: 8px;
`;

const ParticipantLink = styled(Link)`
	display: block;
	line-height: 24px;
	&:hover {
		color: ${colors.blueAccent[400]};
	}
`;

const ActivityOrganisedView = () => {
	const state = useOrganisedActivity();

	return (
		<PageContainer>
			<PageHeading>Organised Activity</PageHeading>
			<AsyncContent state={state} notFoundMessage="Activity not found.">
				{(activity) => (
					<>
						<DetailsCard>
							<AccentHeading>{activity.activityName}</AccentHeading>
							<Body>Date: {formatDate(activity.date)}</Body>
							<Body>Organised by: {activity.teamMember ? fullName(activity.teamMember) : "-"}</Body>
							<Body>Comment: {activity.comment || "-"}</Body>
						</DetailsCard>
						<DetailsCard>
							<SectionHeading>Participants ({activity.participants.length})</SectionHeading>
							{activity.participants.map((resident) => (
								<ParticipantLink key={resident.id} to={`/residents/${resident.id}`}>
									{fullName(resident)}
								</ParticipantLink>
							))}
						</DetailsCard>
					</>
				)}
			</AsyncContent>
		</PageContainer>
	);
};

export default ActivityOrganisedView;
