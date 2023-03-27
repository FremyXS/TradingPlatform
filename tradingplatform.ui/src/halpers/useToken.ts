import { useState } from 'react';
import { UserToken } from '../types';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('user');
    const userToken: UserToken = JSON.parse(tokenString!);
    return userToken?.access_token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: UserToken) => {
    localStorage.setItem('user', JSON.stringify(userToken));
    setToken(userToken.access_token);
  };

  return {
    setToken: saveToken,
    token
  }
}