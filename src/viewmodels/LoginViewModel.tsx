import { useState } from 'react';

import { post } from '../services/ApiService';

const useLoginViewModel = () => {
  const [idCard, setIdCard] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isButtonEnabled = idCard.trim().length > 0;

  const handleLogin = async () => {
    if (!isButtonEnabled) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      let body = {};
      if (idCard === '1111111111111') {
        body = {
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30,
        };
      }
      console.log(idCard, body);
      const response = await post('auth/login', body);
      console.log('Login successful:', response);
    } catch (error) {
      console.log(error);
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    idCard,
    setIdCard,
    isLoading,
    isButtonEnabled,
    errorMessage,
    handleLogin,
  };
};

export default useLoginViewModel;
