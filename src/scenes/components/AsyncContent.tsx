import type { ReactNode } from "react";
import { isAxiosError } from "axios";

import LoadingSpinner from "./LoadingSpinner";
import { ErrorText } from "../../common/layout";
import type { AsyncState } from "../../hooks/useAsync";

interface AsyncContentProps<T> {
	state: AsyncState<T>;
	notFoundMessage?: string;
	children: (data: NonNullable<T>) => ReactNode;
}

/**
 * Renders the result of useAsync: a spinner while loading, an error message on failure,
 * a "not found" message when the request returned nothing, and otherwise `children(data)`.
 */
const AsyncContent = <T,>({ state, notFoundMessage = "Not found.", children }: AsyncContentProps<T>) => {
	const { data, error, loading } = state;

	if (loading) return <LoadingSpinner />;
	const is404 = isAxiosError(error) && error.response?.status === 404;
	if (is404 || (!error && !data)) return <ErrorText>{notFoundMessage}</ErrorText>;
	if (error || !data) return <ErrorText>Something went wrong while loading. Please try again.</ErrorText>;
	return <>{children(data)}</>;
};

export default AsyncContent;
