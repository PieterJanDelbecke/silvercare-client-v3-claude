import type { IconType } from "react-icons";
import {
	AiOutlineHome,
	AiOutlineTeam,
	AiOutlineUser,
	AiOutlineUserAdd,
	AiOutlineSetting,
	AiOutlineSearch,
	AiOutlineMenu,
	AiOutlineBarChart,
	AiOutlineLineChart,
	AiOutlinePieChart,
	AiOutlineCalendar,
	AiOutlineQuestionCircle,
	AiOutlineForm,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiOutlineArrowUp,
	AiOutlineArrowDown,
} from "react-icons/ai";

const ICONS = {
	home: AiOutlineHome,
	team: AiOutlineTeam,
	user: AiOutlineUser,
	addMember: AiOutlineUserAdd,
	settings: AiOutlineSetting,
	search: AiOutlineSearch,
	menu: AiOutlineMenu,
	barChart: AiOutlineBarChart,
	lineChart: AiOutlineLineChart,
	pieChart: AiOutlinePieChart,
	calendar: AiOutlineCalendar,
	faq: AiOutlineQuestionCircle,
	form: AiOutlineForm,
	arrowLeft: AiOutlineArrowLeft,
	arrowRight: AiOutlineArrowRight,
	arrowUp: AiOutlineArrowUp,
	arrowDown: AiOutlineArrowDown,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof ICONS;

interface IconProps {
	name: IconName;
	size?: number;
	className?: string;
}

// Icons use the surrounding text color (currentColor) unless `className` sets one, e.g. "text-blue-accent-500".
const Icon = ({ name, size = 28, className }: IconProps) => {
	const Component = ICONS[name];
	return <Component className={className} style={{ fontSize: size }} />;
};

export default Icon;
