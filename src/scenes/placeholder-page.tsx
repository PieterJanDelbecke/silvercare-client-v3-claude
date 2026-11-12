import type { ReactNode } from "react";
import { PageHeading, Body } from "../common/typography";
import { CenteredMessage } from "../common/layout";

interface PlaceholderPageProps {
	title: string;
	message?: string;
	children?: ReactNode;
}

const PlaceholderPage = ({ title, message = "Coming soon.", children }: PlaceholderPageProps) => (
	<CenteredMessage>
		<PageHeading>{title}</PageHeading>
		<Body>{message}</Body>
		{children}
	</CenteredMessage>
);

export default PlaceholderPage;
