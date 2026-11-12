import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import Select from "react-select";

import residentsApi from "../api/residents.api";
import useAsync from "../hooks/useAsync";
import { useAppData } from "../context/app-data-context";
import { PageHeading, Body } from "../common/typography";
import { fullName } from "../common/lib";
import { InputLabel, selectOptionStyles } from "../common/styling-forms";
import { colors } from "../styles/theme";
import MyResponsivePie from "./components/PieChart";
import AsyncContent from "./components/AsyncContent";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 60vh;
`;

const FormContainer = styled.div`
	margin-block: 20px;
	width: 480px;
	max-width: 90%;
`;

const Text = styled(Body)`
	color: ${colors.greenAccent[500]};
`;

// Only mounted once a resident is chosen, so it never shows stale or placeholder data.
const ResidentPie = ({ residentId }) => {
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
	const [selectedResident, setSelectedResident] = useState(null);

	const options = residents.map((resident) => ({ value: resident.id, label: fullName(resident) }));

	return (
		<Container>
			<PageHeading>Attendance Chart</PageHeading>
			<Text>last 30 days</Text>
			<FormContainer>
				<InputLabel htmlFor="resident">Resident</InputLabel>
				<Select inputId="resident" options={options} onChange={setSelectedResident} styles={selectOptionStyles} />
			</FormContainer>
			{selectedResident && <ResidentPie key={selectedResident.value} residentId={selectedResident.value} />}
		</Container>
	);
};

export default AttendanceChart;
