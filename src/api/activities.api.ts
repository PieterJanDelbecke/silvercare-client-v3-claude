import { request } from "./client";
import type { Id, NewActivity, OrganisedActivity } from "../types";

const activitiesApi = {
	getOrganisedActivity: (organisedActivityId: Id | undefined) =>
		request<OrganisedActivity | null>({
			method: "get",
			url: "/activity/organisedActivity",
			params: { organisedActivityId },
		}),

	newActivity: (values: NewActivity) => request<{ id: Id }>({ method: "post", url: "/activity/new", data: values }),
};

export default activitiesApi;
