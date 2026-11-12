import { request } from "./client";

const residentsApi = {
	getResident: (residentId) => request({ method: "get", url: "/resident/resident", params: { residentId } }),

	addResident: (newResident) => request({ method: "post", url: "/resident/add", data: newResident }),

	addResidentActivities: (residentActivities) =>
		request({ method: "post", url: "/resident/addActivities", data: residentActivities }),

	// Replaces the resident's full set of activities.
	editResidentActivities: (residentId, activityIds) =>
		request({ method: "post", url: "/resident/editActivities", data: { residentId, activityIds } }),

	getResidentActivities: (residentId) =>
		request({ method: "get", url: "/resident/residentActivities", params: { residentId } }),

	getResidentAttendanceData: (residentId) =>
		request({ method: "get", url: "/resident/attendanceData", params: { residentId } }),
};

export default residentsApi;
