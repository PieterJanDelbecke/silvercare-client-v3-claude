// Runtime configuration, read from Vite env variables (see .env.example).
export const API_URL: string = import.meta.env.VITE_API_URL || "http://localhost:4000";

// There is no authentication yet, so the signed-in user shown in the sidebar is configured here.
export const CURRENT_USER = {
	name: import.meta.env.VITE_USER_NAME || "Admin",
	role: import.meta.env.VITE_USER_ROLE || "SilverCare",
};
