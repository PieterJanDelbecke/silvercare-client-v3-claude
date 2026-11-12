import { request } from "./client";

const adminApi = {
	firstLoad: () => request({ method: "get", url: "/admin/firstload" }),
};

export default adminApi;
