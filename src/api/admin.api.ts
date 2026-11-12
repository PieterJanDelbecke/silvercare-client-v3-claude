import { request } from "./client";
import type { FirstLoadData } from "../types";

const adminApi = {
	firstLoad: () => request<Partial<FirstLoadData>>({ method: "get", url: "/admin/firstload" }),
};

export default adminApi;
