import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react'
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