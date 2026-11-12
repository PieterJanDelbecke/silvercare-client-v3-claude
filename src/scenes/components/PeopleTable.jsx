import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { PageHeading } from "../../common/typography";
import { PageContainer, OutlineButton } from "../../common/layout";
import { fullName } from "../../common/lib";
import { colors } from "../../styles/theme";
import Icon from "../../common/icons";
import SearchBar from "../../common/searchBar";

const TopContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 18px;
`;

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;

const Row = styled.tr`
	cursor: pointer;
	background-color: ${(props) => (props.isSelected ? colors.primary[400] : "transparent")};
	&:hover {
		background-color: ${colors.primary[400]};
	}
`;

const Td = styled.td`
	padding: 8px;
`;

const Th = styled.th`
	cursor: pointer;
	padding: 12px 8px;
	text-align: left;
	background-color: ${colors.blueAccent[500]};
	color: white;
`;

const ThCell = styled.div`
	display: flex;
	gap: 12px;
`;

const Footer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: ${colors.blueAccent[500]};
	margin-top: 4px;
	gap: 6px;
`;

const PageButton = styled.button`
	cursor: pointer;
	margin: 6px;
	padding: 6px;
	display: flex;
	align-items: center;
	&:disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}
`;

const SelectedContainer = styled.div`
	display: flex;
	min-width: 200px;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`;

const SelectedText = styled.div`
	color: ${colors.greenAccent[500]};
`;

const EmptyCell = styled.td`
	padding: 16px 8px;
	color: ${colors.grey[300]};
`;

/**
 * Searchable, sortable, paginated list of people.
 * Clicking a row selects it; "View" (or double-click) opens `getDetailPath(person)`.
 */
const PeopleTable = ({ title, columns, people, getDetailPath }) => {
	const navigate = useNavigate();
	const [sorting, setSorting] = useState([]);
	const [filtering, setFiltering] = useState("");
	const [selectedPerson, setSelectedPerson] = useState(null);

	const table = useReactTable({
		data: people,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: { sorting, globalFilter: filtering },
		onSortingChange: setSorting,
		onGlobalFilterChange: setFiltering,
	});

	const rows = table.getRowModel().rows;

	return (
		<PageContainer>
			<PageHeading>{title}</PageHeading>
			<TopContainer>
				<SearchBar value={filtering} onChange={(e) => setFiltering(e.target.value)} />
				{selectedPerson && (
					<SelectedContainer>
						<SelectedText>{fullName(selectedPerson)}</SelectedText>
						<OutlineButton onClick={() => navigate(getDetailPath(selectedPerson))}>View</OutlineButton>
					</SelectedContainer>
				)}
			</TopContainer>
			<Table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<Th key={header.id} onClick={header.column.getToggleSortingHandler()}>
									<ThCell>
										{flexRender(header.column.columnDef.header, header.getContext())}
										{header.column.getIsSorted() === "asc" && <Icon name="arrowUp" size={16} color="white" />}
										{header.column.getIsSorted() === "desc" && <Icon name="arrowDown" size={16} color="white" />}
									</ThCell>
								</Th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{rows.length === 0 && (
						<tr>
							<EmptyCell colSpan={columns.length}>No results.</EmptyCell>
						</tr>
					)}
					{rows.map((row) => (
						<Row
							key={row.id}
							isSelected={selectedPerson?.id === row.original.id}
							onClick={() => setSelectedPerson(row.original)}
							onDoubleClick={() => navigate(getDetailPath(row.original))}
						>
							{row.getVisibleCells().map((cell) => (
								<Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
							))}
						</Row>
					))}
				</tbody>
			</Table>
			<Footer>
				<div>
					{table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
				</div>
				<PageButton disabled={!table.getCanPreviousPage()} onClick={() => table.setPageIndex(0)}>
					First Page
				</PageButton>
				<PageButton
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.previousPage()}
					aria-label="Previous page"
				>
					<Icon name="arrowLeft" size={16} />
				</PageButton>
				<PageButton disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} aria-label="Next page">
					<Icon name="arrowRight" size={16} />
				</PageButton>
				<PageButton disabled={!table.getCanNextPage()} onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
					Last Page
				</PageButton>
			</Footer>
		</PageContainer>
	);
};

export default PeopleTable;
