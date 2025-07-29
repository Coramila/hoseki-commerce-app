import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Http from "../../lib/httpClient";
import { IHttp } from "../../lib/httpClient/http.interface";

type FetchResult<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
};

const useFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const http: IHttp = Http();

    useEffect(() => {
        setIsLoading(true)

        http.get<T>(url).then((response) => {
            setData(response);
            setIsLoading(false);
        }).catch((err) => {
            setError("Erro ao carregar dados!");
            setIsLoading(false);
        })
    }, [url])
    return { data, isLoading, error };
};

export default useFetch;