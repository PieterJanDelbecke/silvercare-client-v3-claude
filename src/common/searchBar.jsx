import styled from "@emotion/styled";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { colors } from "../styles/theme";

const Container = styled.div`
	border-radius: 4px;
	background-color: ${colors.primary[400]};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 8px;
`;

const SearchInput = styled.input`
	color: ${colors.grey[100]};
	background-color: ${colors.primary[400]};
	margin: 12px;
	:focus {
		outline: none;
	}
`;

const SearchBar = ({ value, onChange, iconSize }) => {
	const iconStyle = {
		fontSize: iconSize || "24px",
	};
	return (
		<Container>
			<SearchInput type="text" value={value} onChange={onChange} placeholder="Search" />
			<SearchIcon style={iconStyle} />
		</Container>
	);
};

export default SearchBar;
