import { RotatingLines } from "react-loader-spinner";
import { colors } from "../../styles/theme";

const LoadingSpinner = () => (
	<div className="flex h-[200px] w-[200px] items-center justify-center">
		<RotatingLines
			visible={true}
			height="48"
			width="48"
			strokeColor={colors.blueAccent[500]}
			strokeWidth="5"
			animationDuration="0.75"
			ariaLabel="loading"
		/>
	</div>
);

export default LoadingSpinner;
