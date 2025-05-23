import React from "react";
interface FoundedRepoProps {
  repo: any;
  refresh: () => void;
}
const FoundedRepo: React.FC<FoundedRepoProps> = ({ repo, refresh }) => {
  return (
    <div className="repository">
      <a href={repo.html_url} target="_blank" className="repo-container">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <div className="repo-info">
          <p>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="iconify iconify--twemoji"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle fill="#FDCB58" cx="18" cy="18" r="18"></circle>
            </svg>
            {repo.language}
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={15}
              height={15}
              viewBox="0 0 256 256"
              xmlSpace="preserve"
            >
              <g
                style={{
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "none",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 45.002 75.502 c 2.862 0 5.72 0.684 8.326 2.051 l 19.485 10.243 l -3.721 -21.678 c -1.002 -5.815 0.926 -11.753 5.164 -15.877 L 90 34.895 l -21.768 -3.161 c -5.838 -0.85 -10.884 -4.514 -13.499 -9.806 L 44.998 2.205 l -9.73 19.717 c -2.615 5.292 -7.661 8.962 -13.499 9.811 L 0 34.895 L 15.749 50.25 c 4.224 4.111 6.156 10.044 5.16 15.863 l -3.721 21.682 l 19.466 -10.238 C 39.268 76.19 42.135 75.502 45.002 75.502 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(155,155,155)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
              </g>
            </svg>
            {repo.stargazers_count}
          </p>
          <p>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                color: "gray",
              }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4ZM9 5C9 6.30622 8.16519 7.41746 7 7.82929V9C7 10.1046 7.89543 11 9 11C10.1947 11 11.2671 11.5238 12 12.3542C12.7329 11.5238 13.8053 11 15 11C16.1046 11 17 10.1046 17 9V7.82929C15.8348 7.41746 15 6.30622 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5C21 6.30622 20.1652 7.41746 19 7.82929V9C19 11.2091 17.2091 13 15 13C13.8954 13 13 13.8954 13 15V16.1707C14.1652 16.5825 15 17.6938 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.6938 9.83481 16.5825 11 16.1707V15C11 13.8954 10.1046 13 9 13C6.79086 13 5 11.2091 5 9V7.82929C3.83481 7.41746 3 6.30622 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18ZM18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6Z"
                fill="#000000"
              />
            </svg>{" "}
            {repo.forks_count}
          </p>
        </div>
      </a>

      <button onClick={refresh} className="refresh-button">
        Refresh
      </button>
    </div>
  );
};

export default FoundedRepo;
