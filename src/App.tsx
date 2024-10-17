import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Callback from './components/Callback';
import RepoList from './components/RepoList';
import CodeReview from './components/CodeReview';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/repos" element={<RepoList />} />
            <Route path="/review/:owner/:repo/:pull" element={<CodeReview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;