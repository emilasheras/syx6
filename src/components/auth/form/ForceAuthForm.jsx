import { useLocation, Navigate } from "react-router-dom";
import useEmailAndPasswordAuth from "../../../hooks/useEmailAndPasswordAuth";
import PageHeader from "../../page-heading/Default";

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


    const title = "Authenticate";
    const description = "Please sign in to continue.";

    // If the user is not authentificated, aka its a guest, show the sign in form
    return (
        <div>
            <PageHeader title={title} extraMessage={description} />            
            <div className="s6-form-container">
                <form className="s6-form">
                    <div>
                        {/* <label>Email</label> */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        {/* <label>Password</label> */}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            placeholder="Password"
                        />
                    </div>
                    <button className="s6-form-button" type="button" onClick={handleSignUpClick}>Sign Up</button>
                    <button className="s6-form-button" type="button" onClick={handleSignInClick}>Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default ForceAuthForm;
