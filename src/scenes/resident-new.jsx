import { useParams } from "react-router-dom";

import { useAppData } from "../context/app-data-context";
import { PageContainer, ErrorText } from "../common/layout";
import { findById, fullName } from "../common/lib";
import SuccessPanel from "./components/SuccessPanel";

// Final step of adding a resident.
const ResidentNew = () => {
	const { residentId } = useParams();
	const { residents } = useAppData();
	const resident = findById(residents, residentId);

	if (!resident) {
		return (
			<PageContainer>
				<ErrorText>Resident not found.</ErrorText>
			</PageContainer>
		);
	}

	return (
		<PageContainer>
			<SuccessPanel
				title={fullName(resident)}
				viewPath={`/residents/${resident.id}`}
				links={[
					{ label: "Add Resident", icon: "addMember", to: "/residents/new" },
					{ label: "Dashboard", icon: "home", to: "/" },
				]}
			/>
		</PageContainer>
	);
};

export default ResidentNew;
