import axios from 'axios';
import ErrorResponse from 'models/ErrorResponse';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const useConfig = (key: string, defaultVal: string) => {

    const [, setLoading] = useState(true);
    const [value, setValue] = useState<string>(defaultVal);
    const [error, setError] = useState<ErrorResponse>()

    useEffect(() => {
        axios.get(`/api/config/${key}`)
            .then(({ data }) => setValue(data.toString()))
            .catch(e => setError(e.response.data))
            .finally(() => setLoading(false));
    }, [key, defaultVal]);

    return { value, error };
}

export const useQuery = () => new URLSearchParams(useLocation().search);

export const useAccessCode = () => {
    const STORAGE_KEY = "cbp_access_code";
    const queryParams = useQuery()
    const code =  queryParams.get("code");
    if(code){
        localStorage.setItem(STORAGE_KEY,  code);
    }
    return localStorage.getItem(STORAGE_KEY) || "";
}