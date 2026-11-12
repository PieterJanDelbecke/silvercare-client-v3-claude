import { useEffect, useState } from "react";

export interface AsyncState<T> {
	data: T | null;
	error: unknown;
	loading: boolean;
}

/**
 * Runs `asyncFn` on mount and whenever it changes (wrap it in useCallback).
 * Ignores results that arrive after unmount or after a newer call started.
 */
const useAsync = <T>(asyncFn: () => Promise<T>): AsyncState<T> => {
	const [state, setState] = useState<AsyncState<T>>({ data: null, error: null, loading: true });

	useEffect(() => {
		let active = true;
		setState({ data: null, error: null, loading: true });

		asyncFn()
			.then((data) => {
				if (active) setState({ data, error: null, loading: false });
			})
			.catch((error: unknown) => {
				console.error(error);
				if (active) setState({ data: null, error, loading: false });
			});

		return () => {
			active = false;
		};
	}, [asyncFn]);

	return state;
};

export default useAsync;
