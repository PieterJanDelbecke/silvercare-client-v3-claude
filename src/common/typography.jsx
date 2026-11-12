import { tw } from "./tw";

export const PageHeading = tw(
	"h1",
	"text-[28px] font-light leading-8 tablet:text-[40px] tablet:leading-[48px] laptop:leading-[56px]"
);

export const Heading = tw("h1", "text-4xl font-normal leading-[48px] text-grey-900");

export const Subheading = tw("h2", "text-xl font-bold leading-6");

export const Overline = tw(
	"p",
	"text-base font-semibold uppercase leading-6 tracking-[2px] text-grey-700 tabular-nums lining-nums"
);

export const Body = tw("p", "text-base font-normal leading-5");

export const BodyBold = tw("p", "text-base font-bold leading-5");

export const BodySmall = tw("p", "text-sm font-normal leading-4 tabular-nums lining-nums");

export const BodySmallBold = tw("p", "text-sm font-extrabold leading-4 tabular-nums lining-nums");

export const Caption = tw("p", "text-sm font-normal leading-4");

export const CaptionBold = tw("p", "text-sm font-extrabold leading-4");

export const Mini = tw("p", "text-xs font-normal leading-4");

export const MiniBold = tw("p", "text-xs font-bold leading-4");
