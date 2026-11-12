import { useCallback } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";

import { useAppData } from "../context/app-data-context";
import residentsApi from "../api/residents.api";
import useAsync from "../hooks/useAsync";
import { Body } from "../common/typography";
import { PageContainer, Card, ErrorText, OutlineButton } from "../common/layout";
import { calculateAge, findById, formatDate, fullName } from "../common/lib";
import { colors } from "../styles/theme";
import ProfileHeader from "./components/ProfileHeader";
import AsyncContent from "./components/AsyncContent";

const DetailsCard = styled(Card)`
	flex-direction: column;
	gap: 8px;
`;

const DetailRow = styled.div`
	display: flex;
	align-items: flex-start;
`;

const Subject = styled.span`
	flex-shrink: 0;
	color: ${colors.greenAccent[500]};
	width: 90px;
`;

const InfoItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 1;
`;

const InfoItem = styled.span`
	text-transform: capitalize;
	padding-inline: 8px;
	& + & {
		border-left: 1px solid ${colors.blueAccent[500]};
	}
`;

const Muted = styled.span`
	padding-inline: 8px;
	color: ${colors.grey[300]};
`;

const Detail = ({ subject, items, action }) => (
	<DetailRow>
		<Subject>{subject}:</Subject>
		<InfoItems>
			{items.length === 0 && <Muted>none</Muted>}
			{items.map((item) => (
				<InfoItem key={item}>{item}</InfoItem>
			))}
		</InfoItems>
		{action}
	</DetailRow>
);

const Resident = () => {
	const navigate = useNavigate();
	const { residentId } = useParams();
	const { residents } = useAppData();
	const resident = findById(residents, residentId);

	const details = useAsync(useCallback(() => residentsApi.getResident(residentId), [residentId]));

	if (!resident) {
		return (
			<PageContainer>
				<ErrorText>Resident not found.</ErrorText>
			</PageContainer>
		);
	}

	return (
		<PageContainer>
			<ProfileHeader name={fullName(resident)}>
				<Body>Gender: {resident.gender}</Body>
				<Body>DOB: {formatDate(resident.dob)}</Body>
				<Body>Age: {calculateAge(resident.dob)}</Body>
			</ProfileHeader>
			<AsyncContent state={details}>
				{({ info, activities }) => (
					<DetailsCard>
						<Detail subject="Nationality" items={info.nationalities} />
						<Detail subject="Language" items={info.languages} />
						<Detail subject="Religion" items={info.religions} />
						<Detail
							subject="Activities"
							items={activities.map((activity) => activity.name)}
							action={
								<OutlineButton onClick={() => navigate(`/residents/${residentId}/activities/edit`)}>
									edit
								</OutlineButton>
							}
						/>
					</DetailsCard>
				)}
			</AsyncContent>
		</PageContainer>
	);
};

export default Resident;
