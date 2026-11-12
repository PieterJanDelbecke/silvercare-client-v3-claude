// Shapes of the data the SilverCare backend returns, as used by this app.

// Backend ids may be numbers or UUID strings; route params are always strings.
export type Id = number | string;

export interface Person {
	id: Id;
	firstName: string;
	lastName: string;
}

export interface Resident extends Person {
	dob: string; // ISO date
	gender: string;
}

export interface TeamMember extends Person {
	role: string;
	admin: boolean;
}

export interface Activity {
	id: Id;
	activity: string; // the activity's name
	removed?: boolean;
}

// A row of the dashboard's "last organised activities" table.
export interface OrganisedActivitySummary {
	organisedActivityId: Id;
	activityName: string;
	date: string; // ISO date
	residentCount: number;
}

export interface OrganisedActivity {
	id: Id;
	activityName: string;
	date: string; // ISO date
	comment: string | null;
	teamMember: Person | null;
	participants: Person[];
}

export interface FirstLoadData {
	residents: Resident[];
	activities: Activity[];
	teamMembers: TeamMember[];
	lastOrganisedActivities: OrganisedActivitySummary[];
}

export interface ResidentDetails {
	info: {
		nationalities: string[];
		languages: string[];
		religions: string[];
	};
	activities: { id: Id; name: string }[];
}

export interface ResidentActivityChoice {
	id: Id;
	name: string;
	selected: boolean;
}

// One slice of a resident's attendance pie chart.
export interface AttendanceDatum {
	id: string | number;
	label?: string;
	value: number;
}

export interface NewResident {
	firstName: string;
	lastName: string;
	dob: string; // "YYYY-MM-DD"
	gender: string;
	nationalities: string[];
	languages: string[];
	religions: string[];
	practicingReligion: boolean;
}

export interface NewActivity {
	activityId: Id;
	teamMemberId: Id;
	date: string;
	comment: string;
	attendingResidentIds: string[];
}

// An option of a react-select dropdown.
export interface SelectOption<V = Id> {
	value: V;
	label: string;
}

// Draft of the "new activity" wizard, kept between its steps.
export interface ActivityDraft {
	activity: SelectOption;
	teamMemberId: Id;
	date: string;
	comment: string;
}
