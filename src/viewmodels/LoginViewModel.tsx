import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { User } from '../models/user';
import { DefaultNavigationProps } from '../navigation/navigation';
import { API_ENDPOINT } from '../services/ApiEndpoint';
import { post } from '../services/ApiService';
import { useStore } from '../stores/useStore';

type LoginProps = DefaultNavigationProps<'LoginPage'>;

const useLoginViewModel = () => {
  const [idCard, setIdCard] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<LoginProps['navigation']>();

  const { setUser } = useStore();

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
      // console.log(idCard, body);
      const response = await post(API_ENDPOINT.login, body);
      setUser(response as User);
      navigation.navigate('HomePage');
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
