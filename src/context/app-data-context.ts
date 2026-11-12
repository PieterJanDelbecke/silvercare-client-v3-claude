import { createContext, useContext } from "react";
import type { ActivityDraft, FirstLoadData, Resident } from "../types";

export interface AppData extends FirstLoadData {
	reload: () => Promise<void>;
	addResident: (resident: Resident) => void;
	activityDraft: ActivityDraft | null;
	setActivityDraft: (draft: ActivityDraft | null) => void;
}

export const AppDataContext = createContext<AppData | null>(null);

/**
 * Shared app data. Pages only render once the initial load has succeeded,
 * so `residents`, `activities`, `teamMembers` and `lastOrganisedActivities` are always arrays here.
 */
export const useAppData = (): AppData => {
	const value = useContext(AppDataContext);
	if (!value) {
		throw new Error("useAppData must be used inside <AppDataProvider>");
	}
	return value;
};
