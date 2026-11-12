import Icon from "./icons";

const SearchBar = ({ value, onChange, iconSize = 24 }) => (
	<div className="flex items-center justify-between rounded bg-primary-400 pr-2">
		<input
			type="text"
			value={value}
			onChange={onChange}
			placeholder="Search"
			className="m-3 bg-primary-400 text-grey-100 focus:outline-none"
		/>
		<Icon name="search" size={iconSize} />
	</div>
);

export default SearchBar;
