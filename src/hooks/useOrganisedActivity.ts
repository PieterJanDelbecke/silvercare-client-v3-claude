import { useCallback } from "react";
import { useParams } from "react-router-dom";

import activitiesApi from "../api/activities.api";
import useAsync from "./useAsync";

// Loads the organised activity whose id is in the URL (/activities/:organisedActivityId).
const useOrganisedActivity = () => {
	const { organisedActivityId } = useParams();
	return useAsync(useCallback(() => activitiesApi.getOrganisedActivity(organisedActivityId), [organisedActivityId]));
};

export default useOrganisedActivity;
