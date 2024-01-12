import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom"; // Make sure you have react-router-dom installed
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoute = ({ children }) => {
	const { isGuest } = useContext(UserContext);
    const location = useLocation();

	if (isGuest) {
		// Redirect them to the /signin page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they sign in, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/auth/login" state={{ from: location }} />;
	}

	return children;
};

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProtectedRoute;