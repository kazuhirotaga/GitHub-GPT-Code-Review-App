import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

interface Repo {
  id: number;
  name: string;
  owner: {
    login: string;
  };
}

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      const token = localStorage.getItem('github_token');
      if (!token) {
        setError('No GitHub token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://api.github.com/user/repos', {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch repositories');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div>Loading repositories...</div>;
  if (error) return <Navigate to="/login" />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Repositories</h2>
      <ul className="space-y-2">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-white p-4 rounded shadow">
            <Link
              to={`/review/${repo.owner.login}/${repo.name}`}
              className="text-blue-500 hover:text-blue-600"
            >
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;