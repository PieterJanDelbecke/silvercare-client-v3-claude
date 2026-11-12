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
import { cn } from "../../common/tw";
import Icon from "../../common/icons";
import SearchBar from "../../common/searchBar";

const pageButtonClasses =
	"m-1.5 flex cursor-pointer items-center p-1.5 disabled:cursor-not-allowed disabled:opacity-40";

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
			<div className="mb-[18px] flex w-full justify-between">
				<SearchBar value={filtering} onChange={(e) => setFiltering(e.target.value)} />
				{selectedPerson && (
					<div className="flex min-w-[200px] items-center justify-between gap-3">
						<div className="text-green-accent-500">{fullName(selectedPerson)}</div>
						<OutlineButton onClick={() => navigate(getDetailPath(selectedPerson))}>View</OutlineButton>
					</div>
				)}
			</div>
			<table className="w-full border-collapse">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									onClick={header.column.getToggleSortingHandler()}
									className="cursor-pointer bg-blue-accent-500 px-2 py-3 text-left text-white"
								>
									<div className="flex gap-3">
										{flexRender(header.column.columnDef.header, header.getContext())}
										{header.column.getIsSorted() === "asc" && <Icon name="arrowUp" size={16} />}
										{header.column.getIsSorted() === "desc" && <Icon name="arrowDown" size={16} />}
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{rows.length === 0 && (
						<tr>
							<td colSpan={columns.length} className="px-2 py-4 text-grey-300">
								No results.
							</td>
						</tr>
					)}
					{rows.map((row) => (
						<tr
							key={row.id}
							className={cn(
								"cursor-pointer hover:bg-primary-400",
								selectedPerson?.id === row.original.id && "bg-primary-400"
							)}
							onClick={() => setSelectedPerson(row.original)}
							onDoubleClick={() => navigate(getDetailPath(row.original))}
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
			<div className="mt-1 flex w-full items-center justify-end gap-1.5 bg-blue-accent-500">
				<div>
					{table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
				</div>
				<button
					className={pageButtonClasses}
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.setPageIndex(0)}
				>
					First Page
				</button>
				<button
					className={pageButtonClasses}
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.previousPage()}
					aria-label="Previous page"
				>
					<Icon name="arrowLeft" size={16} />
				</button>
				<button
					className={pageButtonClasses}
					disabled={!table.getCanNextPage()}
					onClick={() => table.nextPage()}
					aria-label="Next page"
				>
					<Icon name="arrowRight" size={16} />
				</button>
				<button
					className={pageButtonClasses}
					disabled={!table.getCanNextPage()}
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
				>
					Last Page
				</button>
			</div>
		</PageContainer>
	);
};

export default PeopleTable;
