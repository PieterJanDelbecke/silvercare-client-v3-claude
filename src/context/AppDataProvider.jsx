import { useCallback, useEffect, useMemo, useState } from "react";

import adminApi from "../api/admin.api";
import { AppDataContext } from "./app-data-context";
import LoadingSpinner from "../scenes/components/LoadingSpinner";
import { CenteredMessage, ErrorText, PrimaryButton } from "../common/layout";

const emptyData = { residents: [], activities: [], teamMembers: [], lastOrganisedActivities: [] };

const AppDataProvider = ({ children }) => {
	const [data, setData] = useState(emptyData);
	const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

	// Draft of the "new activity" wizard, shared between its steps.
	const [activityDraft, setActivityDraft] = useState(null);

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
	const addResident = useCallback((resident) => {
		setData((current) => ({ ...current, residents: [...current.residents, resident] }));
	}, []);

	const value = useMemo(
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
