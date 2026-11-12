import { BaseButton } from "./buttons";
import Icon from "./icons";

const IconButton = ({ name, onClick, size, color, label }) => (
	<BaseButton onClick={onClick} aria-label={label || name}>
		<Icon name={name} size={size} color={color} />
	</BaseButton>
);

export default IconButton;
