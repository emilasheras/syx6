// useFetchData.js
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import syxlog from '../utils/syxlog';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const networkErrorMsg = 'Network response was not ok.';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                
                const prodReference = await collection(db, 'assets');
                syxlog.debug('useFetchData.js 1', prodReference);

                const data = await getDocs(prodReference);
                syxlog.debug('useFetchData.js 2', data);

                setData(data);
                setError(null);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]); // <- Re-run the effect if the URL changes
    
    syxlog.debug('useFetchData.js END before return', data);

    return { data, isLoading, error };
};

export default useFetchData;