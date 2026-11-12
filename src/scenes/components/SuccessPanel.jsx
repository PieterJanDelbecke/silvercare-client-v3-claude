import { useNavigate } from "react-router-dom";

import { Body } from "../../common/typography";
import { Card, AccentHeading, OutlineButton, IconLinkButton } from "../../common/layout";
import Icon from "../../common/icons";

/**
 * Confirmation screen shown after creating something.
 * `links` are { label, icon, to } shortcuts shown below the summary.
 */
const SuccessPanel = ({ title, subtitle, viewPath, links }) => {
	const navigate = useNavigate();

	return (
		<>
			<Card className="mt-12 items-center justify-between">
				<div>
					<Body>Successfully added</Body>
					<AccentHeading>{title}</AccentHeading>
					{subtitle && <Body>{subtitle}</Body>}
				</div>
				<OutlineButton onClick={() => navigate(viewPath)}>View</OutlineButton>
			</Card>
			<Card className="justify-center gap-10">
				{links.map(({ label, icon, to }) => (
					<IconLinkButton key={to} onClick={() => navigate(to)}>
						<Icon name={icon} />
						<Body>{label}</Body>
					</IconLinkButton>
				))}
			</Card>
		</>
	);
};

export default SuccessPanel;
