import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


type FetchResult<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
};

const useFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true)

        axios.get(url).then((response: AxiosResponse<T>) => {
            setData(response.data);
            setIsLoading(false);
        }).catch((err) => {
            setError("Erro ao carregar dados!");
            setIsLoading(false);
        })
    }, [url])
    return {data, isLoading, error};
};

export default useFetch;