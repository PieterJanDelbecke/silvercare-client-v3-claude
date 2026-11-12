import type { ColumnDef } from "@tanstack/react-table";

import { useAppData } from "../context/app-data-context";
import type { TeamMember } from "../types";
import PeopleTable from "./components/PeopleTable";

const columns: ColumnDef<TeamMember>[] = [
	{ header: "First Name", accessorKey: "firstName" },
	{ header: "Last Name", accessorKey: "lastName" },
	{ header: "Role", accessorKey: "role" },
];

// Reads straight from shared data, so the list is always up to date.
const Team = () => {
	const { teamMembers } = useAppData();

	return (
		<PeopleTable
			title="Team"
			columns={columns}
			people={teamMembers}
			getDetailPath={(member) => `/team/${member.id}`}
		/>
	);
};

export default Team;
