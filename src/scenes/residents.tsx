import { useAppData } from "../context/app-data-context";
import type { ColumnDef } from "@tanstack/react-table";

import { formatDate } from "../common/lib";
import type { Resident } from "../types";
import PeopleTable from "./components/PeopleTable";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- columns hold values of different types
const columns: ColumnDef<Resident, any>[] = [
	{ header: "First Name", accessorKey: "firstName" },
	{ header: "Last Name", accessorKey: "lastName" },
	{ header: "DOB", accessorKey: "dob", cell: (info) => formatDate(info.getValue<string>()) },
	{ header: "Gender", accessorKey: "gender" },
];

// Reads straight from shared data, so newly added residents show up immediately.
const Residents = () => {
	const { residents } = useAppData();

	return (
		<PeopleTable
			title="Residents"
			columns={columns}
			people={residents}
			getDetailPath={(resident) => `/residents/${resident.id}`}
		/>
	);
};

export default Residents;
