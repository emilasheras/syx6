import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import syxlog from '../utils/syxlog';

export const useAddToFirestore = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addDocument = async (collectionName, newDocument) => {
        if (!collectionName || !newDocument) {
            console.error("Collection name and document must be provided");
            return;
        }

        setLoading(true);
        try {
            const docRef = await addDoc(collection(db, collectionName), newDocument);
            setData(docRef.id);  // Assuming you want to store the document ID
            setError(null);
            return docRef.id; // Optionally return the new document ID
        } catch (e) {
            syxlog.error('addDocument()', e);
            setError(e.message);
            return null; // Indicate failure
        } finally {
            setLoading(false);
        }
    };

    return { addDocument, data, isLoading, error };
};
