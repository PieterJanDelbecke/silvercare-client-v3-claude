import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { useAppData } from "../context/app-data-context";
import { PageHeading } from "../common/typography";
import { PageContainer } from "../common/layout";
import { formatDate } from "../common/lib";
import { colors } from "../styles/theme";

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;

const Row = styled.tr`
	cursor: pointer;
	&:hover {
		background-color: ${colors.primary[400]};
	}
`;

const Td = styled.td`
	padding: 8px;
`;

const Th = styled.th`
	padding: 12px 8px;
	text-align: left;
	background-color: ${colors.blueAccent[500]};
	color: white;
`;

const Empty = styled.td`
	padding: 16px 8px;
	color: ${colors.grey[300]};
`;

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
			<Table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<Th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</Th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{lastOrganisedActivities.length === 0 && (
						<tr>
							<Empty colSpan={columns.length}>No activities organised yet.</Empty>
						</tr>
					)}
					{table.getRowModel().rows.map((row) => (
						<Row key={row.id} onClick={() => navigate(`/activities/${row.original.organisedActivityId}`)}>
							{row.getVisibleCells().map((cell) => (
								<Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
							))}
						</Row>
					))}
				</tbody>
			</Table>
		</PageContainer>
	);
};

export default Dashboard;
