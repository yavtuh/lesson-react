import { useCallback, useEffect, useRef, useState } from "react"



const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const abortControllerRef = useRef(new AbortController());

    const getData = useCallback(async (signal) => {


        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(url, { signal });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        abortControllerRef.current.abort();
        abortControllerRef.current = new AbortController();
        getData(abortControllerRef.current.signal);

        return () => {
            abortControllerRef.current.abort();
        }
    }, [getData]);

    const refetch = () => {
        abortControllerRef.current.abort();
        abortControllerRef.current = new AbortController();
        getData(abortControllerRef.current.signal);
    };

    return {
        data,
        error,
        isLoading,
        refetch
    }
}

export default useFetch