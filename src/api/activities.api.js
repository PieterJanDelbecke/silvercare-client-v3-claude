import { request } from "./client";

const activitiesApi = {
	getOrganisedActivity: (organisedActivityId) =>
		request({ method: "get", url: "/activity/organisedActivity", params: { organisedActivityId } }),

	newActivity: (values) => request({ method: "post", url: "/activity/new", data: values }),
};

export default activitiesApi;
