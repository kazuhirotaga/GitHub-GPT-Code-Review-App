import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.post('/api/github/callback', { code });
          const { access_token } = response.data;
          localStorage.setItem('github_token', access_token);
          navigate('/repos');
        } catch (error) {
          console.error('Error fetching token:', error);
          navigate('/');
        }
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Processing GitHub login...</div>;
};

export default Callback;