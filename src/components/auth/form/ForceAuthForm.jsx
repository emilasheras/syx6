import { useLocation, Navigate } from "react-router-dom";
import useEmailAndPasswordAuth from "../../../hooks/useEmailAndPasswordAuth";

const ForceAuthForm = () => {
    const { email, setEmail, password, setPassword, signIn, signUp, isGuest } = useEmailAndPasswordAuth();
    const location = useLocation();
    const redirectAfterAuth = location.state?.from?.pathname || '/';

    const handleSignInClick = (e) => {
        e.preventDefault(); // Prevent form submission
        signIn();
    };

    const handleSignUpClick = (e) => {
        e.preventDefault(); // Prevent form submission
        signUp();
    };

    if (!isGuest) return <Navigate to={redirectAfterAuth} />; // <- Redirects to the saved location or default route

    // If the user is not authentificated, aka a guest, show the sign in form
    return (
        <form>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                />
            </div>
            <button type="button" onClick={handleSignUpClick}>Sign Up</button>
            <button type="button" onClick={handleSignInClick}>Sign In</button>
        </form>
    );
};

export default ForceAuthForm;
