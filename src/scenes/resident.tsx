import { useCallback, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppData } from "../context/app-data-context";
import residentsApi from "../api/residents.api";
import useAsync from "../hooks/useAsync";
import { Body } from "../common/typography";
import { PageContainer, Card, ErrorText, OutlineButton } from "../common/layout";
import { calculateAge, findById, formatDate, fullName } from "../common/lib";
import ProfileHeader from "./components/ProfileHeader";
import AsyncContent from "./components/AsyncContent";

// One "Subject: a | b | c" line on the resident page.
interface DetailProps {
	subject: string;
	items: string[];
	action?: ReactNode;
}

const Detail = ({ subject, items, action }: DetailProps) => (
	<div className="flex items-start">
		<span className="w-[90px] shrink-0 text-green-accent-500">{subject}:</span>
		<div className="flex flex-1 flex-wrap">
			{items.length === 0 && <span className="px-2 text-grey-300">none</span>}
			{items.map((item) => (
				<span key={item} className="px-2 capitalize [&+&]:border-l [&+&]:border-blue-accent-500">
					{item}
				</span>
			))}
		</div>
		{action}
	</div>
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
					<Card className="flex-col gap-2">
						<Detail subject="Nationality" items={info.nationalities} />
						<Detail subject="Language" items={info.languages} />
						<Detail subject="Religion" items={info.religions} />
						<Detail
							subject="Activities"
							items={activities.map((activity) => activity.name)}
							action={
								<OutlineButton onClick={() => navigate(`/residents/${residentId}/activities/edit`)}>edit</OutlineButton>
							}
						/>
					</Card>
				)}
			</AsyncContent>
		</PageContainer>
	);
};

export default Resident;
