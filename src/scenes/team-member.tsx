import { useParams } from "react-router-dom";

import { useAppData } from "../context/app-data-context";
import { Body } from "../common/typography";
import { PageContainer, ErrorText } from "../common/layout";
import { findById, fullName } from "../common/lib";
import ProfileHeader from "./components/ProfileHeader";

const TeamMember = () => {
	const { teamMemberId } = useParams();
	const { teamMembers } = useAppData();
	const member = findById(teamMembers, teamMemberId);

	if (!member) {
		return (
			<PageContainer>
				<ErrorText>Team member not found.</ErrorText>
			</PageContainer>
		);
	}

	return (
		<PageContainer>
			<ProfileHeader name={fullName(member)}>
				<Body>Role: {member.role}</Body>
				<Body>Admin: {member.admin ? "yes" : "no"}</Body>
			</ProfileHeader>
		</PageContainer>
	);
};

export default TeamMember;
