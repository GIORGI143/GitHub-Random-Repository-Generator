import React from "react";
interface FoundedRepoProps {
  repo: any;
  refresh: () => void;
}
const FoundedRepo: React.FC<FoundedRepoProps> = ({ repo, refresh }) => {
  return (
    <div>
      <div className="repo-info">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Forks: {repo.forks_count}</p>
        <p>Language: {repo.language}</p>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
      <button onClick={refresh}>Get Another Repository</button>
    </div>
  );
};

export default FoundedRepo;
