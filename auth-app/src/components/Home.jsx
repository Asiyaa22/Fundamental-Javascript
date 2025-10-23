import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Auth Simulation 👋</h1>
      <p>
        This project demonstrates how to use <strong>React Context</strong> to
        manage global authentication and protect routes using{" "}
        <strong>React Router</strong>.
      </p>

      <div className="features">
        <h3>Concepts Covered</h3>
        <ul>
          <li>Context API & useContext</li>
          <li>Protected Routes</li>
          <li>Custom Hook (useAuth)</li>
          <li>Conditional Rendering</li>
        </ul>
      </div>
    </div>
  );
}
