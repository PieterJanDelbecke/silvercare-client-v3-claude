# SilverCare – Frontend (v3)

Admin dashboard for aged care villages: manage residents and team members, log organised activities and
their attendance, and view attendance charts.

Built with React 18 + TypeScript + Vite. Talks to the `silvercare-server-v3-claude` backend.

## Getting started

```sh
npm install
cp .env.example .env.local   # adjust the API URL / user name if needed
npm run dev
```

The backend must be running (default `http://localhost:4000`).

| Script            | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Type-check, then production build into `dist/` |
| `npm run typecheck` | Type-check only (`tsc`)            |
| `npm run lint`    | ESLint, fails on any warning         |
| `npm run preview` | Serve the production build locally   |

## Project structure

```
src/
  api/          one file per backend area; all calls go through api/client.ts
  context/      shared app data (residents, activities, team, last activities)
  hooks/        useAsync (load data with loading/error state), useOrganisedActivity
  common/       shared styled components, icons, helpers
  scenes/       one file per page; scenes/components holds reusable page parts
  styles/       theme, reset and global styles
  data/         static dropdown options and demo chart data
  types.ts      shapes of the data the backend returns
```

## Routes

| Path                                    | Page                                    |
| --------------------------------------- | --------------------------------------- |
| `/`                                     | Dashboard – last organised activities   |
| `/team`, `/team/:id`                    | Team list and team member               |
| `/residents`, `/residents/:id`          | Resident list and resident details      |
| `/residents/new`                        | Add resident (step 1)                   |
| `/residents/:id/activities/set`         | Add resident – activity interests (step 2) |
| `/residents/:id/created`                | Add resident – confirmation (step 3)    |
| `/residents/:id/activities/edit`        | Edit a resident's activity interests    |
| `/activities/new`                       | New activity (step 1)                   |
| `/activities/new/attendance`            | New activity – attendance (step 2)      |
| `/activities/:id/confirmed`             | New activity – confirmation (step 3)    |
| `/activities/:id`                       | Organised activity details              |
| `/charts/attendance`, `/charts/line`    | Charts                                  |

Every detail page takes its id from the URL, so pages can be refreshed, bookmarked and shared.

## How data flows

- On startup `AppDataProvider` loads `/admin/firstload` and shows a spinner (or an error with a retry
  button) until it succeeds. Pages are only rendered once that data is there.
- Pages read shared data with `useAppData()`. Updates use functional `setState`, so they never overwrite
  each other.
- Page-specific data is loaded with `useAsync`, which handles loading, errors and late responses.
- `api/client.ts` throws on network errors, non-2xx responses **and** on the v2 backend's
  `200 "ERROR: ..."` responses, so failures are never mistaken for data.

## Used libraries

axios, emotion, formik, yup, luxon, @tanstack/react-table, @nivo (charts), react-icons,
react-router-dom, react-select, react-loader-spinner, @mui/material (`useMediaQuery` only).
