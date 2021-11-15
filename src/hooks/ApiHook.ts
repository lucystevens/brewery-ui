import { AxiosResponse } from 'axios';
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