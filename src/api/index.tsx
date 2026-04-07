import { AxiosResponse } from 'axios';
import { LoginResponse } from '../utils/types';
import { apiClient } from './client';

export const loginApi = async (email: string, password: string) => {
  const response: AxiosResponse<LoginResponse> = await apiClient.post(
    '/login',
    {
      email,
      password,
    },
  );
  return response.data;
};

export const getEventsApi = async (token: string) => {
  const response = await apiClient.post('/events-listing', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
