import { DateTime } from "luxon";
import type { Id, Person } from "../types";

// convert "DD/MM/YYYY" to "YYYY-MM-DD" (the format the backend expects)
export const convertDateFormat = (inputDate: string): string => {
	const [day, month, year] = inputDate.split("/");
	return `${year}-${month}-${day}`;
};

// ISO date string -> "Nov 12, 2026"
export const formatDate = (isoDate: string): string => DateTime.fromISO(isoDate).toLocaleString(DateTime.DATE_MED);

export const calculateAge = (isoDob: string): number =>
	Math.floor(DateTime.local().diff(DateTime.fromISO(isoDob), "years").years);

export const fullName = (person: Pick<Person, "firstName" | "lastName">): string =>
	`${person.firstName} ${person.lastName}`;

// Route params are strings; backend ids may be numbers or UUID strings.
export const findById = <T extends { id: Id }>(list: T[], id: Id | undefined): T | undefined =>
	list.find((item) => String(item.id) === String(id));
