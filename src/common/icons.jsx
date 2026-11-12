import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { AiOutlineTeam as TeamIcon } from "react-icons/ai";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { AiOutlineSetting as SettingsIcon } from "react-icons/ai";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { AiOutlineBarChart as BarChartIcon } from "react-icons/ai";
import { AiOutlineLineChart as LineChartIcon } from "react-icons/ai";
import { AiOutlinePieChart as PieChartIcon } from "react-icons/ai";
import { AiOutlineCalendar as CalendarIcon } from "react-icons/ai";
import { AiOutlineQuestionCircle as FaqIcon } from "react-icons/ai";
import { AiOutlineForm as FormIcon } from "react-icons/ai";
import { AiOutlineArrowLeft as ArrowLeftIcon } from "react-icons/ai";
import { AiOutlineArrowRight as ArrowRightIcon } from "react-icons/ai";
import { AiOutlineArrowUp as ArrowUpIcon } from "react-icons/ai";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";
import { AiOutlineUserAdd as AddMemberIcon } from "react-icons/ai";

import { colors } from "../styles/theme";

const Icon = ({ name, size, color }) => {
	const iconStyle = {
		fontSize: size || 28,
		color: color || colors.grey[100],
	};

	switch (name) {
		case "home":
			return <HomeIcon style={iconStyle} />;
		case "team":
			return <TeamIcon style={iconStyle} />;
		case "user":
			return <UserIcon style={iconStyle} />;
		case "addMember":
			return <AddMemberIcon style={iconStyle} />;
		case "settings":
			return <SettingsIcon style={iconStyle} />;
		case "search":
			return <SearchIcon style={iconStyle} />;
		case "menu":
			return <MenuIcon style={iconStyle} />;
		case "barChart":
			return <BarChartIcon style={iconStyle} />;
		case "lineChart":
			return <LineChartIcon style={iconStyle} />;
		case "pieChart":
			return <PieChartIcon style={iconStyle} />;
		case "calendar":
			return <CalendarIcon style={iconStyle} />;
		case "faq":
			return <FaqIcon style={iconStyle} />;
		case "form":
			return <FormIcon style={iconStyle} />;
		case "arrowLeft":
			return <ArrowLeftIcon style={iconStyle} />;
		case "arrowRight":
			return <ArrowRightIcon style={iconStyle} />;
		case "arrowUp":
			return <ArrowUpIcon style={iconStyle} />;
		case "arrowDown":
			return <ArrowDownIcon style={iconStyle} />;
		default:
			return <></>;
	}
};

export default Icon;
