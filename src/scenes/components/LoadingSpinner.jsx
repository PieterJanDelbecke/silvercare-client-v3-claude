import styled from "@emotion/styled";
import { RotatingLines } from "react-loader-spinner";
import { colors } from "../../styles/theme";

const Container = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoadingSpinner = () => (
	<Container>
		<RotatingLines
			visible={true}
			height="48"
			width="48"
			strokeColor={colors.blueAccent[500]}
			strokeWidth="5"
			animationDuration="0.75"
			ariaLabel="loading"
		/>
	</Container>
);

export default LoadingSpinner;
