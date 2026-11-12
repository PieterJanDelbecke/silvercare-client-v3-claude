import { PageHeading, Body } from "../common/typography";
import { CenteredMessage } from "../common/layout";

const PlaceholderPage = ({ title, message = "Coming soon.", children }) => (
	<CenteredMessage>
		<PageHeading>{title}</PageHeading>
		<Body>{message}</Body>
		{children}
	</CenteredMessage>
);

export default PlaceholderPage;
