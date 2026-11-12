import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

import { colors } from "../../styles/theme";
import IconButton from "../../common/iconButtons";
import { mediaQueryMinWidth } from "../../common/lib";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	background-color: ${colors.primary[500]};
	height: 60px;
`;

// On small screens the sidebar is hidden; the menu button opens it as an overlay.
const Topbar = ({ onMenuClick }) => {
	const isDesktop = useMediaQuery(mediaQueryMinWidth);

	return <Container>{!isDesktop && <IconButton name="menu" label="Open menu" onClick={onMenuClick} />}</Container>;
};

export default Topbar;
