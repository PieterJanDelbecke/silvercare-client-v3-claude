import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { colors } from "../../styles/theme";
import { Heading, Subheading, Body } from "../../common/typography";
import Icon from "../../common/icons";
import { CURRENT_USER } from "../../config";

const Container = styled.nav`
	display: flex;
	flex-direction: column;
	min-width: 270px;
	min-height: 100vh;
	background-color: ${colors.primary[400]};
	${(props) =>
		props.overlay &&
		`
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 10;
		box-shadow: 4px 0 16px rgba(0, 0, 0, 0.5);
	`}
`;

const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block: 12px;
`;

const Name = styled(Heading)`
	color: #fff;
`;

const Role = styled(Subheading)`
	color: ${colors.greenAccent[500]};
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 12px 24px;
	gap: 8px;
`;

const OptionLink = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 16px;
`;

const MENU = [
	{ title: "Dashboard", to: "/", icon: "home" },
	{ title: "Team", to: "/team", icon: "team" },
	{ title: "Residents", to: "/residents", icon: "user" },
	{ title: "Add Resident", to: "/residents/new", icon: "addMember" },
	{ title: "New Activity", to: "/activities/new", icon: "form" },
	{ title: "Attendance Chart", to: "/charts/attendance", icon: "pieChart" },
	{ title: "Line Chart", to: "/charts/line", icon: "lineChart" },
	{ title: "Calendar", to: "/calendar", icon: "calendar" },
	{ title: "FAQ", to: "/faq", icon: "faq" },
];

// The active item is derived from the URL, so it stays correct after a refresh or browser back/forward.
const Sidebar = ({ overlay = false, onNavigate }) => (
	<Container overlay={overlay}>
		<UserContainer>
			<Name>{CURRENT_USER.name}</Name>
			<Role>{CURRENT_USER.role}</Role>
		</UserContainer>
		<OptionsContainer>
			{MENU.map(({ title, to, icon }) => (
				<OptionLink key={to} to={to} end onClick={onNavigate}>
					{({ isActive }) => {
						const color = isActive ? colors.blueAccent[500] : colors.grey[100];
						return (
							<>
								<Icon name={icon} color={color} />
								<Body style={{ color }}>{title}</Body>
							</>
						);
					}}
				</OptionLink>
			))}
		</OptionsContainer>
	</Container>
);

export default Sidebar;
