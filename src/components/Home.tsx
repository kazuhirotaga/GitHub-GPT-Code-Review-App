import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to GitHub GPT Code Review</h1>
      <p className="text-xl mb-8">
        Connect your GitHub account and get AI-powered code reviews for your pull requests.
      </p>
      <Link
        to="/repos"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;