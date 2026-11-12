import { Field } from "formik";

import { cn, tw } from "./tw";

export { PrimaryButton as SubmitButton } from "./layout";

export const FormPage = tw("div", "flex flex-col items-center pb-12");

export const InputsContainer = tw("div", "m-5 w-full");

// 4-column grid; each field takes the full row on small screens and half a row on desktop.
export const Grid = tw("div", "grid w-full grid-cols-4 gap-x-6 gap-y-2 px-9");

export const InputContainer = tw("div", "col-span-4 desktop:col-span-2");

export const Input = tw("input", "h-10 w-full rounded-md bg-grey-100 pl-3.5 text-black focus:outline-none");

export const InputLabel = tw("label", "ml-2 block h-4 text-xs");

export const Error = tw("p", "ml-2 min-h-4 text-xs text-red-accent-400");

export const RadioGroup = tw("div", "my-3 flex items-center gap-4 pl-3");

const choiceLabelClasses = "inline-flex cursor-pointer items-center gap-2";

export const ChoiceLabel = tw("label", choiceLabelClasses);

// Formik's Field uses `as` itself, so this one isn't built with `tw`.
interface ChoiceInputProps {
	type: "radio" | "checkbox";
	name: string;
	value: string;
	className?: string;
}

export const ChoiceInput = ({ className, ...props }: ChoiceInputProps) => (
	<Field className={cn("scale-150", className)} {...props} />
);

export const ButtonContainer = tw("div", "flex justify-end pr-9");

// Checkbox-list forms (attendance, resident activities)
export const CheckboxPage = FormPage;

export const CheckboxInputs = tw("div", "w-full pl-6 desktop:w-4/5");

export const CheckboxGrid = tw("div", "my-3 flex flex-wrap pl-3");

export const CheckboxItem = tw("label", cn(choiceLabelClasses, "m-1.5 w-[45%] desktop:w-[30%]"));
