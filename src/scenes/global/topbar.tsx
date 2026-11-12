import IconButton from "../../common/iconButtons";

// On small screens the sidebar is hidden; the menu button opens it as an overlay.
const Topbar = ({ onMenuClick }: { onMenuClick: () => void }) => (
	<div className="flex h-[60px] items-center justify-between bg-primary-500 p-4">
		<IconButton name="menu" label="Open menu" onClick={onMenuClick} className="desktop:hidden" />
	</div>
);

export default Topbar;
