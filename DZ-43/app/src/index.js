import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Photos from "./components/Photos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/albums/:id",
        element: <Albums />,
      },
      {
        path: "/users/albums/photos/:id",
        element: <Photos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
