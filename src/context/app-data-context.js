import { createContext, useContext } from "react";

export const AppDataContext = createContext(null);

/**
 * Shared app data. Pages only render once the initial load has succeeded,
 * so `residents`, `activities`, `teamMembers` and `lastOrganisedActivities` are always arrays here.
 */
export const useAppData = () => {
	const value = useContext(AppDataContext);
	if (!value) {
		throw new Error("useAppData must be used inside <AppDataProvider>");
	}
	return value;
};
