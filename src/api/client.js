import axios from "axios";
import { API_URL } from "../config";

const http = axios.create({ baseURL: API_URL });

// The backend answers some failures with status 200 and a body like "ERROR: ...".
// Treat those as errors so callers never mistake them for real data.
const isErrorBody = (data) => typeof data === "string" && data.startsWith("ERROR");

/**
 * Performs a request and returns the response body.
 * Throws on network errors, non-2xx statuses and backend error bodies,
 * so every caller handles failures the same way (try/catch).
 */
export const request = async (config) => {
	const { data } = await http.request(config);
	if (isErrorBody(data)) {
		throw new Error(data);
	}
	return data;
};
