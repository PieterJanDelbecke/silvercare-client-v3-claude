import { cn } from "./tw";
import Icon from "./icons";

const IconButton = ({ name, onClick, size, label, className }) => (
	<button
		type="button"
		onClick={onClick}
		aria-label={label || name}
		className={cn(
			"inline-flex cursor-pointer items-center justify-center gap-1 disabled:cursor-not-allowed",
			className
		)}
	>
		<Icon name={name} size={size} />
	</button>
);

export default IconButton;
