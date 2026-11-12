import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { Body } from "../../common/typography";
import { Card, AccentHeading, OutlineButton, IconLinkButton } from "../../common/layout";
import Icon from "../../common/icons";

const HeadCard = styled(Card)`
	margin-top: 48px;
	justify-content: space-between;
	align-items: center;
`;

const LinksCard = styled(Card)`
	justify-content: center;
	gap: 40px;
`;

/**
 * Confirmation screen shown after creating something.
 * `links` are { label, icon, to } shortcuts shown below the summary.
 */
const SuccessPanel = ({ title, subtitle, viewPath, links }) => {
	const navigate = useNavigate();

	return (
		<>
			<HeadCard>
				<div>
					<Body>Successfully added</Body>
					<AccentHeading>{title}</AccentHeading>
					{subtitle && <Body>{subtitle}</Body>}
				</div>
				<OutlineButton onClick={() => navigate(viewPath)}>View</OutlineButton>
			</HeadCard>
			<LinksCard>
				{links.map(({ label, icon, to }) => (
					<IconLinkButton key={to} onClick={() => navigate(to)}>
						<Icon name={icon} />
						<Body>{label}</Body>
					</IconLinkButton>
				))}
			</LinksCard>
		</>
	);
};

export default SuccessPanel;
