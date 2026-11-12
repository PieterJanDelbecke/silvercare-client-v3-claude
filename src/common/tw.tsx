import type { ComponentPropsWithoutRef, ElementType, JSX } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Join class names; later Tailwind classes override earlier conflicting ones (e.g. `mt-6` + `mt-0` -> `mt-0`).
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

type IntrinsicTag = keyof JSX.IntrinsicElements;

// Props of the default element, plus `as` to render a different element.
export type TwProps<T extends IntrinsicTag> = ComponentPropsWithoutRef<T> & { as?: ElementType };

/**
 * Small element with default Tailwind classes, e.g. `const Card = tw("div", "rounded-lg p-6")`.
 * Accepts `className` (merged over the defaults) and `as` to render a different element.
 */
export const tw = <T extends IntrinsicTag>(defaultTag: T, baseClasses: string) => {
	const Component = ({ as, className, ...props }: TwProps<T>) => {
		const Tag: ElementType = as ?? defaultTag;
		return <Tag className={cn(baseClasses, className)} {...props} />;
	};
	Component.displayName = `tw(${defaultTag})`;
	return Component;
};
