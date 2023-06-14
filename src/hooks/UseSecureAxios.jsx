import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const useSecureAxios = () => {
  const { logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const secureAxios = axios.create({
    baseURL: 'http://localhost:5000', 
  });

  useEffect(() => {
    secureAxios.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    secureAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, secureAxios]);

  return [secureAxios];
};

export default useSecureAxios;