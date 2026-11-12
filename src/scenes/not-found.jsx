import { Link } from "react-router-dom";
import PlaceholderPage from "./placeholder-page";

const NotFound = () => (
	<PlaceholderPage title="Page not found" message="This page doesn't exist.">
		<Link to="/">Back to the dashboard</Link>
	</PlaceholderPage>
);

export default NotFound;
