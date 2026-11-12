import styled from "@emotion/styled";

import { PageHeading, Body } from "../common/typography";
import { colors } from "../styles/theme";
import { mockLineData } from "../data/mockLineData";
import MyLineChart from "./components/LineChart";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 75vh;
`;

const Note = styled(Body)`
	color: ${colors.greenAccent[500]};
`;

// Placeholder: the backend has no endpoint for this chart yet, so it is clearly labelled as demo data.
const LineChart = () => (
	<Container>
		<PageHeading>Line Chart</PageHeading>
		<Note>Demo data</Note>
		<MyLineChart data={mockLineData} xLegend="transportation" yLegend="count" />
	</Container>
);

export default LineChart;
