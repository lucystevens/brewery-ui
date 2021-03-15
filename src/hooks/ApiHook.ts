import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react'
import ServerResponse from '../models/ServerResponse';

export const useService = <T,>(serviceFn: () => Promise<AxiosResponse<ServerResponse<T>>>) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T>();
    const [errors, setErrors] = useState();
   
    useEffect(() => {
      serviceFn()
        .then(({ data }) => {
            data.success?
                setData(data.data):
                setErrors(data.errors);
        })
        .catch((e) => {
            setErrors(e);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [serviceFn]);
   
    return [{ data, isLoading, errors }];
  }