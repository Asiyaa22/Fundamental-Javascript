import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [username]);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          backgroundColor: "#555",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
        }}
      >
        <img
          src={user.avatar_url}
          alt={user.login}
          width="100"
          style={{ borderRadius: "50%" }}
        />
        <h2>{user.name || user.login}</h2>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Public Repos: {user.public_repos}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
