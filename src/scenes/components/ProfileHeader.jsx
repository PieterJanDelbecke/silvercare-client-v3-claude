import { Card, AccentHeading } from "../../common/layout";
import blankImage from "../../images/blank-profile-picture.png";

// Name + details + photo block used by the resident and team member pages.
const ProfileHeader = ({ name, children }) => (
	<Card className="mt-0 flex-wrap items-center p-0">
		<div className="flex min-w-[260px] flex-1 flex-col p-6">
			<AccentHeading>{name}</AccentHeading>
			<div>{children}</div>
		</div>
		<img className="m-6 h-60 w-[200px] object-cover" src={blankImage} alt={`Profile picture of ${name}`} />
	</Card>
);

export default ProfileHeader;
