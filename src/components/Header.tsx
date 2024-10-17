import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
          <Github className="mr-2" />
          GitHub GPT Code Review
        </Link>
        <div>
          <Link to="/repos" className="text-gray-600 hover:text-gray-800 mr-4">
            Repositories
          </Link>
          {/* Add more navigation items as needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;