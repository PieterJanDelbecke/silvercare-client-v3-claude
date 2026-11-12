import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Join class names; later Tailwind classes override earlier conflicting ones (e.g. `mt-6` + `mt-0` -> `mt-0`).
export const cn = (...inputs) => twMerge(clsx(inputs));

/**
 * Small element with default Tailwind classes, e.g. `const Card = tw("div", "rounded-lg p-6")`.
 * Accepts `className` (merged over the defaults) and `as` to render a different element.
 */
export const tw = (defaultTag, baseClasses) => {
	const Component = ({ as: Tag = defaultTag, className, ...props }) => (
		<Tag className={cn(baseClasses, className)} {...props} />
	);
	Component.displayName = `tw(${typeof defaultTag === "string" ? defaultTag : defaultTag.displayName || "Component"})`;
	return Component;
};
