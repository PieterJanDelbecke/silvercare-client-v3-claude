import { PageHeading, Body } from "../common/typography";
import { mockLineData } from "../data/mockLineData";
import MyLineChart from "./components/LineChart";

// Placeholder: the backend has no endpoint for this chart yet, so it is clearly labelled as demo data.
const LineChart = () => (
	<div className="flex h-[75vh] flex-col items-center">
		<PageHeading>Line Chart</PageHeading>
		<Body className="text-green-accent-500">Demo data</Body>
		<MyLineChart data={mockLineData} xLegend="transportation" yLegend="count" />
	</div>
);

export default LineChart;
