import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="dashboard">
      <h2>Welcome Back, {user.username}! 🎉</h2>
      <p>
        You are now logged in. This page is <strong>protected</strong> and only
        accessible to authenticated users.
      </p>

      <div className="card">
        <h3>Profile Summary</h3>
        <p>Username: <strong>{user.username}</strong></p>
        <p>Role: Student</p>
        <p>Status: Active</p>
      </div>
    </div>
  );
}
