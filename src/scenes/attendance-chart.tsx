import { useCallback, useState } from "react";
import Select from "react-select";

import residentsApi from "../api/residents.api";
import useAsync from "../hooks/useAsync";
import { useAppData } from "../context/app-data-context";
import { PageHeading, Body } from "../common/typography";
import { fullName } from "../common/lib";
import type { Id, SelectOption } from "../types";
import { InputLabel } from "../common/styling-forms";
import { selectOptionStyles } from "../common/select-styles";
import MyResponsivePie from "./components/PieChart";
import AsyncContent from "./components/AsyncContent";

// Only mounted once a resident is chosen, so it never shows stale or placeholder data.
const ResidentPie = ({ residentId }: { residentId: Id }) => {
	const state = useAsync(useCallback(() => residentsApi.getResidentAttendanceData(residentId), [residentId]));
	return (
		<AsyncContent state={state} notFoundMessage="Resident not found.">
			{(data) =>
				data.length ? <MyResponsivePie data={data} /> : <Body>No activities attended in the last 30 days.</Body>
			}
		</AsyncContent>
	);
};

const AttendanceChart = () => {
	const { residents } = useAppData();
	const [selectedResident, setSelectedResident] = useState<SelectOption | null>(null);

	const options: SelectOption[] = residents.map((resident) => ({ value: resident.id, label: fullName(resident) }));

	return (
		<div className="flex h-[60vh] flex-col items-center">
			<PageHeading>Attendance Chart</PageHeading>
			<Body className="text-green-accent-500">last 30 days</Body>
			<div className="my-5 w-[480px] max-w-[90%]">
				<InputLabel htmlFor="resident">Resident</InputLabel>
				<Select inputId="resident" options={options} onChange={setSelectedResident} styles={selectOptionStyles} />
			</div>
			{selectedResident && <ResidentPie key={selectedResident.value} residentId={selectedResident.value} />}
		</div>
	);
};

export default AttendanceChart;
