import { useNavigate } from "react-router-dom";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { PageContainer } from "../common/layout";
import { formatDate } from "../common/lib";

// Defined outside the component so the table doesn't get new columns on every render.
const columns = [
	{ header: "Activity", accessorKey: "activityName" },
	{ header: "Date", accessorKey: "date", cell: (info) => formatDate(info.getValue()) },
	{ header: "Attendees", accessorKey: "residentCount" },
];

const Dashboard = () => {
	const navigate = useNavigate();
	const { lastOrganisedActivities } = useAppData();

	const table = useReactTable({
		data: lastOrganisedActivities,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<PageContainer>
			<PageHeading>Dashboard</PageHeading>
			<table className="w-full border-collapse">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className="bg-blue-accent-500 px-2 py-3 text-left text-white">
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{lastOrganisedActivities.length === 0 && (
						<tr>
							<td colSpan={columns.length} className="px-2 py-4 text-grey-300">
								No activities organised yet.
							</td>
						</tr>
					)}
					{table.getRowModel().rows.map((row) => (
						<tr
							key={row.id}
							className="cursor-pointer hover:bg-primary-400"
							onClick={() => navigate(`/activities/${row.original.organisedActivityId}`)}
						>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className="p-2">
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</PageContainer>
	);
};

export default Dashboard;
