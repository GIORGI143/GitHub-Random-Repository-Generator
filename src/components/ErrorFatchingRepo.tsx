import React from "react";

interface ErrorFatchingRepoProps {
  retry: () => void;
}
const ErrorFatchingRepo: React.FC<ErrorFatchingRepoProps> = ({ retry }) => {
  return (
    <div className="error-fetching-container">
      <div className="error-fetching">Error fetching repositories</div>
      <button onClick={retry}>Click to retry</button>
    </div>
  );
};

export default ErrorFatchingRepo;
