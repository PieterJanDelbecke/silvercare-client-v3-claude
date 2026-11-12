import type { MouseEventHandler } from "react";
import { cn } from "./tw";
import Icon, { type IconName } from "./icons";

interface IconButtonProps {
	name: IconName;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	size?: number;
	label?: string;
	className?: string;
}

const IconButton = ({ name, onClick, size, label, className }: IconButtonProps) => (
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
