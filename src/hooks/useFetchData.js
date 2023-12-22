// useFetchData.js
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const networkErrorMsg = 'Network response was not ok.';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(networkErrorMsg);
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]); // <- Re-run the effect if the URL changes

    return { data, isLoading, error };
};

export default useFetchData;