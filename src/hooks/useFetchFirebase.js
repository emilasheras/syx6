import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import syxlog from '../utils/syxlog';

const useFetchFirebase = (params) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { collection: collectionName, docIds } = params;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let prodReference;
                
                if (docIds && docIds.length > 0) {
                    // Fetch specific documents by IDs
                    prodReference = query(collection(db, collectionName), where('__name__', 'in', docIds));
                } else {
                    // Fetch all documents in the collection
                    prodReference = collection(db, collectionName);
                }

                const data = await getDocs(prodReference);
                // syxlog.debug('useFetchFirebase.js', data);

                setData(data);
                setError(null);
            } catch (e) {
                syxlog.error('useFetchFirebase.js', e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // <- Re-run the effect when collectionName or docIds change

    return { data, isLoading, error };
};

export default useFetchFirebase;