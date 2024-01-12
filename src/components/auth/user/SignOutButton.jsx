import useEmailAndPasswordAuth from "../../../hooks/useEmailAndPasswordAuth";


const SignOutButton = () => {
    const { signOut } = useEmailAndPasswordAuth();

    // {error && <p>{error}</p>}
	return <button onClick={() => signOut()}>Sign Out</button>
};

export default SignOutButton;
