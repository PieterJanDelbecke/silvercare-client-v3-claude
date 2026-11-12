import { cn, tw } from "./tw";
import { PageHeading } from "./typography";

// Shared page layout pieces.

export const PageContainer = tw(
	"div",
	"mx-auto flex w-[750px] max-w-full flex-col items-center pb-12 desktop:w-[1200px]"
);

export const Card = tw("div", "mt-6 flex w-[720px] max-w-full rounded-lg bg-primary-400 p-6 desktop:w-[850px]");

export const AccentHeading = ({ className, ...props }) => (
	<PageHeading className={cn("text-green-accent-500", className)} {...props} />
);

export const CenteredMessage = tw("div", "flex min-h-[60vh] flex-col items-center justify-center gap-4");

export const ErrorText = tw("p", "my-3 text-red-accent-400");

export const OutlineButton = tw(
	"button",
	"m-1.5 flex cursor-pointer items-center rounded-lg border border-grey-100 px-2.5 py-1.5"
);

export const PrimaryButton = tw(
	"button",
	"my-4 h-9 w-40 cursor-pointer rounded-lg bg-green-accent-500 text-primary-500 disabled:cursor-not-allowed disabled:opacity-60"
);

export const IconLinkButton = tw("button", "flex cursor-pointer flex-col items-center gap-1 p-1.5");
