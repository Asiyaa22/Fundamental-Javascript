import React, { useEffect, useState } from "react";

function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Something went wrong 😢</p>;

  return (
    <div className="user-container">
      {users.map((user) => (
        <div key={user.id} className="card">
          <img src={user.avatar_url} alt={user.login} />
          <h3>{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}

export default GitHubUsers;
