import axios, { AxiosResponse } from 'axios';
import Beer from 'models/Beer';
import ErrorResponse from 'models/ErrorResponse';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ServerResponse from '../models/ServerResponse';

export const useService = <T,>(
    makeRequest: () => Promise<AxiosResponse<ServerResponse<T>>>,
    handleErrors: (errors: any) => void
    ) => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T>();
   
    useEffect(() => {
        makeRequest()
        .then(({ data }) => {
            data.success?
                setData(data.data):
                handleErrors(data.errors);
        })
        .catch((e) => {
            handleErrors(e);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [makeRequest, handleErrors]);
   
    return [{ data, isLoading }];
  }

export const useBeers = () => {

    const [isLoading, setLoading] = useState(true);
    const [beers, setBeers] = useState<Beer[]>();
    const [error, setError] = useState<ErrorResponse>()

    useEffect(() => {
        axios.get(`/api/beer`)
            .then(({ data }) => setBeers(data))
            .catch(e => setError(e.response.data))
            .finally(() => setLoading(false));
    }, []);

    return { beers, error, isLoading };
}

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