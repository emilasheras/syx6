import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config"; // Adjust the path as necessary
import PropTypes from "prop-types";
import syxutils from "../utils/syxutils";
import getLoadingJSX from "../components/loading-scaffold/getLoadingJSX";

// Create the context
export const UserContext = createContext();

// This is the provider component
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false);
	const [loading, setLoading] = useState(true);
	const auth = getAuth(app); // Pass the Firebase app instance

	useEffect(() => {
		// This listener handles the auth state change
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			// Set the current user to the user object from the Firebase auth response
			setCurrentUser(user);
			// Set loading to false since we have now fetched the user object
			setLoading(false);
		});

		// Cleanup subscription on unmount
		return unsubscribe;
	}, [auth]);

    // Check if the user is a guest
    const isGuest = syxutils.empty(currentUser); 
	//* note the default value for an unidentified user is `null` (check the firebase docs)
	const contextVars = {
		currentUser,
		setCurrentUser,
		isGuest,
		auth
	};

	// Show a loading screen while the user is being fetched
	if (loading) return getLoadingJSX();
	// Return the provider component
	return (
		<UserContext.Provider value={ contextVars }>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
