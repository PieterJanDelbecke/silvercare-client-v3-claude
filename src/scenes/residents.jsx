import { useAppData } from "../context/app-data-context";
import { formatDate } from "../common/lib";
import PeopleTable from "./components/PeopleTable";

const columns = [
	{ header: "First Name", accessorKey: "firstName" },
	{ header: "Last Name", accessorKey: "lastName" },
	{ header: "DOB", accessorKey: "dob", cell: (info) => formatDate(info.getValue()) },
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
