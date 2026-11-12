import styled from "@emotion/styled";
import { colors } from "../styles/theme";
import { PageHeading } from "./typography";

// Shared page layout pieces (previously copy-pasted into every page).

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-inline: auto;
	padding-bottom: 48px;
	width: 1200px;
	max-width: 100%;
	@media (max-width: 1200px) {
		width: 750px;
	}
`;

export const Card = styled.div`
	width: 850px;
	max-width: 100%;
	display: flex;
	padding: 24px;
	margin-top: 24px;
	background-color: ${colors.primary[400]};
	border-radius: 8px;
	@media (max-width: 1200px) {
		width: 720px;
	}
`;

export const AccentHeading = styled(PageHeading)`
	color: ${colors.greenAccent[500]};
`;

export const CenteredMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	min-height: 60vh;
`;

export const ErrorText = styled.p`
	color: ${colors.redAccent[400]};
	margin-block: 12px;
`;

export const OutlineButton = styled.button`
	cursor: pointer;
	margin: 6px;
	padding: 6px 10px;
	display: flex;
	align-items: center;
	border: 1px solid ${colors.grey[100]};
	border-radius: 8px;
`;

export const PrimaryButton = styled.button`
	cursor: pointer;
	margin-block: 16px;
	width: 160px;
	height: 36px;
	border-radius: 8px;
	background-color: ${colors.greenAccent[500]};
	color: ${colors.primary[500]};
	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export const IconLinkButton = styled.button`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	padding: 6px;
`;
