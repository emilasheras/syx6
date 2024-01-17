import { useEffect, useRef, useState } from "react";

/**
 *
 * @returns {JSX.Element} The NavBar component
 */
const NavBar = () => {
	// Variables
	const searchBarIcon = "search"; // <- (From Material Icons)
	const placeholderHint = "Assets & Text";
	const key1 = "CTRL"; // <- hardcoded for now
	const key2 = "k";
	const hotkeyCombination = `${key1} + ${key2}`;

	// State for the search input value
	const [searchValue, setSearchValue] = useState("");

	// Ref for the input field to focus on it
	const searchInputRef = useRef(null);

	// Function to handle key down events
	const handleKeyDown = (event) => {
		//todo: change hardcoded 'ctrl' key downpress for a variable check. etc. move into helper if needed.
		// Check if hotkey combination is pressed
		if (event.ctrlKey && event.key === key2) {
			event.preventDefault(); // Prevent default behavior
			searchInputRef.current?.focus(); // Focus on the search input
		}
	};

	// Sets up a global event listener for keydown events
	useEffect(() => {
		// Add event listener for keydown
		window.addEventListener("keydown", handleKeyDown);

		// Clean up event listener
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div className="searchbar-container">
			{/* Material Icon */}
			<span className="material-symbols-outlined s6-search-icon">
				{searchBarIcon}
			</span>

			{/* Hint Text */}
			<input
				type="text"
				className="s6-hint-color"
				placeholder={placeholderHint}
				ref={searchInputRef}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>

			{/* Searchbar HotKey */}
			<span className="badge s6-bg-accent">{hotkeyCombination}</span>
		</div>
	);
};

export default NavBar;
