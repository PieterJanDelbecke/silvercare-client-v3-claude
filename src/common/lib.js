import { DateTime } from "luxon";

// min-width for mediaQuery
export const mediaQueryMinWidth = "(min-width:1200px)";

// convert "DD/MM/YYYY" to "YYYY-MM-DD" (the format the backend expects)
export const convertDateFormat = (inputDate) => {
	const [day, month, year] = inputDate.split("/");
	return `${year}-${month}-${day}`;
};

// ISO date string -> "Nov 12, 2026"
export const formatDate = (isoDate) => DateTime.fromISO(isoDate).toLocaleString(DateTime.DATE_MED);

export const calculateAge = (isoDob) => Math.floor(DateTime.local().diff(DateTime.fromISO(isoDob), "years").years);

export const fullName = (person) => `${person.firstName} ${person.lastName}`;

// Route params are strings; backend ids may be numbers or UUID strings.
export const findById = (list, id) => list.find((item) => String(item.id) === String(id));
