import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography, grid, colors } from "../styles/theme";

const boldCss = css`
	font-weight: 800;
`;

export const PageHeading = styled.h1`
	font-weight: 300;
	font-size: ${typography.size.l3};
	line-height: 56px;

	@media screen and (max-width: ${grid.tablet.max}) {
		font-weight: 300;
		font-size: ${typography.size.l3};
		line-height: 48px;
	}

	@media screen and (max-width: ${grid.mobile.max}) {
		font-weight: 300;
		font-size: ${typography.size.m3};
		line-height: 32px;
	}
`;

export const Heading = styled.h1`
	font-size: ${typography.size.l2};
	line-height: 48px;
	font-weight: 400;
	color: ${colors.grey[900]};
`;

export const Subheading = styled.h2`
	font-weight: 700;
	font-size: ${typography.size.m1};
	line-height: 24px;
`;

export const Overline = styled.p`
	font-weight: 600;
	font-size: ${typography.size.s3};
	line-height: 24px;
	letter-spacing: ${typography.letterSpacing.wide};
	text-transform: uppercase;
	color: ${colors.grey[700]};
	font-feature-settings: "tnum" on, "lnum" on;
`;

export const Body = styled.p`
	font-weight: 400;
	font-size: ${typography.size.s3};
	line-height: 20px;
`;

export const BodyBold = styled(Body)`
	font-weight: 700;
`;

export const BodySmall = styled(Body)`
	font-size: ${typography.size.s2};
	line-height: 16px;
	font-feature-settings: "tnum" on, "lnum" on;
`;

export const BodySmallBold = styled(BodySmall)`
	${boldCss}
`;

export const Caption = styled.p`
	font-weight: 400;
	font-size: ${typography.size.s2};
	line-height: 16px;
`;

export const CaptionBold = styled(Caption)`
	${boldCss}
`;

export const Mini = styled.p`
	font-weight: 400;
	font-size: ${typography.size.s1};
	line-height: 16px;
`;

export const MiniBold = styled(Mini)`
	font-weight: 700;
`;
