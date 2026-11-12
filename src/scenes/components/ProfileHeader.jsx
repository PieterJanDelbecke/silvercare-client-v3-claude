import styled from "@emotion/styled";

import { Card, AccentHeading } from "../../common/layout";
import blankImage from "../../images/blank-profile-picture.png";

const HeadCard = styled(Card)`
	margin-top: 0;
	padding: 0;
	align-items: center;
	flex-wrap: wrap;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 260px;
	padding: 24px;
`;

const Image = styled.img`
	width: 200px;
	height: 240px;
	margin: 24px;
	object-fit: cover;
`;

// Name + details + photo block used by the resident and team member pages.
const ProfileHeader = ({ name, children }) => (
	<HeadCard>
		<InfoContainer>
			<AccentHeading>{name}</AccentHeading>
			<div>{children}</div>
		</InfoContainer>
		<Image src={blankImage} alt={`Profile picture of ${name}`} />
	</HeadCard>
);

export default ProfileHeader;
