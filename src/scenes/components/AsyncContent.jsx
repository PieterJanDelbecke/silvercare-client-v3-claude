import LoadingSpinner from "./LoadingSpinner";
import { ErrorText } from "../../common/layout";

/**
 * Renders the result of useAsync: a spinner while loading, an error message on failure,
 * a "not found" message when the request returned nothing, and otherwise `children(data)`.
 */
const AsyncContent = ({ state, notFoundMessage = "Not found.", children }) => {
	const { data, error, loading } = state;

	if (loading) return <LoadingSpinner />;
	if (error?.response?.status === 404 || (!error && !data)) return <ErrorText>{notFoundMessage}</ErrorText>;
	if (error) return <ErrorText>Something went wrong while loading. Please try again.</ErrorText>;
	return children(data);
};

export default AsyncContent;
