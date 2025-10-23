import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to GitHub Users Explorer</h2>
      <button
        onClick={() => navigate("/users")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#24292f",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Fetch GitHub Users
      </button>
    </div>
  );
};

export default Home;
