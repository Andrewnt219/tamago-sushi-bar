import { useState, useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';

export const useApiGet = <Response>(
  api: AxiosInstance = axios,
  url: string
): [Response | null, boolean] => {
  const [data, setData] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
    async function getData() {
      try {
        const { data: responseData } = await api.get<Response | null>(url);
        setData(responseData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [api, url]);

  return [data, isLoading];
};
