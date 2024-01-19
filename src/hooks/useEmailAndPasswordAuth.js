import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut
} from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { FlashPipelineContext } from "../contexts/FlashPipelineContext";

const useEmailAndPasswordAuth = () => {
    const { currentUser, isGuest, setCurrentUser, auth } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const {setFlash} = useContext(FlashPipelineContext);

    const signUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setFlash(`Signed up ${userCredential.user.email}`);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setFlash(`${error.message}`);
        }
        setLoading(false);
    };

    const signIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setFlash(`Logged in ${userCredential.user.email}`);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setFlash(`${error.message}`);
        }
        setLoading(false);
    };

    const signOut = async () => {
        setLoading(true);
        try {
            await firebaseSignOut(auth);
            setCurrentUser(null); // Reset the current currentUser to null after signing out
            setFlash(`Logged out`);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setFlash(`Error: ${error.message}`);
        }
        setLoading(false);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        currentUser,
        isGuest,
        error,
        loading,
        signUp,
        signIn,
        signOut
    };
};

export default useEmailAndPasswordAuth;
