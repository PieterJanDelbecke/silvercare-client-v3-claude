import { NavLink } from "react-router-dom";

import { cn } from "../../common/tw";
import { Heading, Subheading, Body } from "../../common/typography";
import Icon from "../../common/icons";
import { CURRENT_USER } from "../../config";

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

// Always visible on desktop. On smaller screens it's hidden, and shown as an overlay while `open`.
// The active item is derived from the URL, so it stays correct after a refresh or browser back/forward.
const Sidebar = ({ open = false, onNavigate }) => (
	<nav
		className={cn(
			"min-h-screen min-w-[270px] flex-col bg-primary-400",
			open ? "fixed inset-y-0 left-0 z-10 flex shadow-[4px_0_16px_rgba(0,0,0,0.5)]" : "hidden",
			"desktop:static desktop:flex desktop:shadow-none"
		)}
	>
		<div className="my-3 flex flex-col items-center">
			<Heading className="text-white">{CURRENT_USER.name}</Heading>
			<Subheading className="text-green-accent-500">{CURRENT_USER.role}</Subheading>
		</div>
		<div className="mx-6 my-3 flex flex-col gap-2">
			{MENU.map(({ title, to, icon }) => (
				<NavLink
					key={to}
					to={to}
					end
					onClick={onNavigate}
					className={({ isActive }) =>
						cn("flex items-center gap-4", isActive ? "text-blue-accent-500" : "text-grey-100")
					}
				>
					<Icon name={icon} />
					<Body>{title}</Body>
				</NavLink>
			))}
		</div>
	</nav>
);

export default Sidebar;
