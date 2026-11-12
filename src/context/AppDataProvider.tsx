import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import adminApi from "../api/admin.api";
import { AppDataContext, type AppData } from "./app-data-context";
import LoadingSpinner from "../scenes/components/LoadingSpinner";
import { CenteredMessage, ErrorText, PrimaryButton } from "../common/layout";
import type { ActivityDraft, FirstLoadData, Resident } from "../types";

const emptyData: FirstLoadData = { residents: [], activities: [], teamMembers: [], lastOrganisedActivities: [] };

type Status = "loading" | "ready" | "error";

const AppDataProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<FirstLoadData>(emptyData);
	const [status, setStatus] = useState<Status>("loading");

	// Draft of the "new activity" wizard, shared between its steps.
	const [activityDraft, setActivityDraft] = useState<ActivityDraft | null>(null);

	const reload = useCallback(async () => {
		try {
			const result = await adminApi.firstLoad();
			setData({ ...emptyData, ...result });
			setStatus("ready");
		} catch (error) {
			console.error("Initial data load failed:", error);
			// Only show the full-page error when there is nothing to show yet.
			setStatus((current) => (current === "ready" ? current : "error"));
		}
	}, []);

	useEffect(() => {
		reload();
	}, [reload]);

	// Functional update, so concurrent changes never overwrite each other.
	const addResident = useCallback((resident: Resident) => {
		setData((current) => ({ ...current, residents: [...current.residents, resident] }));
	}, []);

	const value = useMemo<AppData>(
		() => ({ ...data, reload, addResident, activityDraft, setActivityDraft }),
		[data, reload, addResident, activityDraft]
	);

	if (status === "loading") {
		return (
			<CenteredMessage>
				<LoadingSpinner />
			</CenteredMessage>
		);
	}

	if (status === "error") {
		return (
			<CenteredMessage>
				<ErrorText>Could not connect to the SilverCare server.</ErrorText>
				<PrimaryButton
					onClick={() => {
						setStatus("loading");
						reload();
					}}
				>
					Try again
				</PrimaryButton>
			</CenteredMessage>
		);
	}

	return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export default AppDataProvider;
