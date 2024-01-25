import useEmailAndPasswordAuth from "../../../hooks/useEmailAndPasswordAuth";
const SignOutButton = () => {
    const { signOut } = useEmailAndPasswordAuth();
	return <button onClick={() => signOut()}>Sign Out</button>
};
export default SignOutButton;
