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
};

// Icons use the surrounding text color (currentColor) unless `className` sets one, e.g. "text-blue-accent-500".
const Icon = ({ name, size = 28, className }) => {
	const Component = ICONS[name];
	return Component ? <Component className={className} style={{ fontSize: size }} /> : null;
};

export default Icon;
