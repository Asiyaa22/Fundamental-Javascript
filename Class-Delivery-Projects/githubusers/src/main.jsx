import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Users from "./Components/Users";
// import UserDetails from "./Components/UserDetails";
const UserDetails = lazy(() => import("./Components/UserDetails"));
// const UserDetails = lazy(() => import ("./Components/UserDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/user/:username", element: <UserDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
