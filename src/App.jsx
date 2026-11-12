import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import { mediaQueryMinWidth } from "./common/lib";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import TeamMember from "./scenes/team-member";
import Residents from "./scenes/residents";
import Resident from "./scenes/resident";
import ResidentAddForm from "./scenes/resident-add-form";
import ResidentSetActivities from "./scenes/resident-set-activities";
import ResidentEditActivities from "./scenes/resident-edit-activities";
import ResidentNew from "./scenes/resident-new";
import ActivityNewForm from "./scenes/activity-new-form";
import ActivityNewAttendance from "./scenes/activity-new-attendance";
import ActivityNewConfirmed from "./scenes/activity-new-confirmed";
import ActivityOrganisedView from "./scenes/activity-organised-view";
import AttendanceChart from "./scenes/attendance-chart";
import LineChart from "./scenes/line-chart";
import Faq from "./scenes/faq";
import Calendar from "./scenes/calendar";
import NotFound from "./scenes/not-found";

function App() {
	const isDesktop = useMediaQuery(mediaQueryMinWidth);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="app">
			{(isDesktop || menuOpen) && <Sidebar overlay={!isDesktop} onNavigate={() => setMenuOpen(false)} />}
			<main className="content">
				<Topbar onMenuClick={() => setMenuOpen((open) => !open)} />
				<Routes>
					<Route path="/" element={<Dashboard />} />

					<Route path="/team" element={<Team />} />
					<Route path="/team/:teamMemberId" element={<TeamMember />} />

					<Route path="/residents" element={<Residents />} />
					<Route path="/residents/new" element={<ResidentAddForm />} />
					<Route path="/residents/:residentId" element={<Resident />} />
					<Route path="/residents/:residentId/activities/set" element={<ResidentSetActivities />} />
					<Route path="/residents/:residentId/activities/edit" element={<ResidentEditActivities />} />
					<Route path="/residents/:residentId/created" element={<ResidentNew />} />

					<Route path="/activities/new" element={<ActivityNewForm />} />
					<Route path="/activities/new/attendance" element={<ActivityNewAttendance />} />
					<Route path="/activities/:organisedActivityId" element={<ActivityOrganisedView />} />
					<Route path="/activities/:organisedActivityId/confirmed" element={<ActivityNewConfirmed />} />

					<Route path="/charts/attendance" element={<AttendanceChart />} />
					<Route path="/charts/line" element={<LineChart />} />

					<Route path="/faq" element={<Faq />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
