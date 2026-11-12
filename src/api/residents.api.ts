import { request } from "./client";
import type { AttendanceDatum, Id, NewResident, Resident, ResidentActivityChoice, ResidentDetails } from "../types";

const residentsApi = {
	getResident: (residentId: Id | undefined) =>
		request<ResidentDetails | null>({ method: "get", url: "/resident/resident", params: { residentId } }),

	addResident: (newResident: NewResident) =>
		request<Resident>({ method: "post", url: "/resident/add", data: newResident }),

	addResidentActivities: (residentActivities: { residentId: Id; activityIds: number[] }) =>
		request<unknown>({ method: "post", url: "/resident/addActivities", data: residentActivities }),

	// Replaces the resident's full set of activities.
	editResidentActivities: (residentId: Id, activityIds: number[]) =>
		request<unknown>({ method: "post", url: "/resident/editActivities", data: { residentId, activityIds } }),

	getResidentActivities: (residentId: Id | undefined) =>
		request<{ activities: ResidentActivityChoice[] } | null>({
			method: "get",
			url: "/resident/residentActivities",
			params: { residentId },
		}),

	getResidentAttendanceData: (residentId: Id) =>
		request<AttendanceDatum[] | null>({ method: "get", url: "/resident/attendanceData", params: { residentId } }),
};

export default residentsApi;
