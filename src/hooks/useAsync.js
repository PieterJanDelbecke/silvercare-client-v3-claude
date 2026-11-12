import { useEffect, useState } from "react";

/**
 * Runs `asyncFn` on mount and whenever it changes (wrap it in useCallback).
 * Ignores results that arrive after unmount or after a newer call started.
 */
const useAsync = (asyncFn) => {
	const [state, setState] = useState({ data: null, error: null, loading: true });

	useEffect(() => {
		let active = true;
		setState({ data: null, error: null, loading: true });

		asyncFn()
			.then((data) => active && setState({ data, error: null, loading: false }))
			.catch((error) => {
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
