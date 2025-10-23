import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) navigate("/dashboard", { replace: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ username: username.trim(), password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn full">
          Login
        </button>

        <div className="hint">
          <strong>Try:</strong> username: <code>asiya</code> | password:{" "}
          <code>1234</code>
        </div>
      </form>
    </div>
  );
}
