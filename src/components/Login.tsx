import React from 'react';

const GITHUB_CLIENT_ID = 'Ov23li3LLREU3pwLgVEE';
const REDIRECT_URI = 'http://localhost:5173/callback';

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`;
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Connect to GitHub</h2>
      <button
        onClick={handleLogin}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default Login;