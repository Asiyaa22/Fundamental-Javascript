import React, {Suspense} from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 GitHub Users Explorer</h1>
      <Suspense fallback={<div>Wait I am Coming...</div>}>
      <Outlet /> {/* Renders nested routes (Home, Users, UserDetails) */}
      </Suspense>
    </div>
  );
}

export default App;
