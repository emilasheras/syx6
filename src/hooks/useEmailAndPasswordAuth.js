import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut
} from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const useEmailAndPasswordAuth = () => {
    const { currentUser, isGuest, setCurrentUser, auth } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.currentUser);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    const signIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.currentUser);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    const signOut = async () => {
        setLoading(true);
        try {
            await firebaseSignOut(auth);
            setCurrentUser(null); // Reset the current currentUser to null after signing out
        } catch (error) {
            setError(error.message);
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
