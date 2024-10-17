import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { OpenAI } from 'openai';

// ... (previous interfaces)

const CodeReview: React.FC = () => {
  // ... (previous state declarations)

  useEffect(() => {
    const fetchPullRequestData = async () => {
      const token = localStorage.getItem('github_token');
      if (!token) {
        setError('No GitHub token found');
        setLoading(false);
        return;
      }

      try {
        const prResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pull}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setPullRequest(prResponse.data);

        const filesResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pull}/files`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setFiles(filesResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pull request data');
        setLoading(false);
      }
    };

    fetchPullRequestData();
  }, [owner, repo, pull]);

  // ... (rest of the component remains the same)

  if (loading) return <div>Loading pull request data...</div>;
  if (error) return <Navigate to="/login" />;

  // ... (rest of the return statement remains the same)
};

export default CodeReview;