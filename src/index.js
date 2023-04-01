import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "components/App";
import Home from "routes/Home";
import Destination from "routes/Destination";
import Crew from "routes/Crew";
import Technology from "routes/Technology";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "components/Destination/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
        children: [
          { path: "moon", element: <Content /> },
          { path: "mars", element: <Content /> },
          { path: "europa", element: <Content /> },
          { path: "titan", element: <Content /> },
        ],
      },
      {
        path: "/crew",
        element: <Crew />,
        children: [
          { path: "hurley", element: <Crew /> },
          { path: "shuttleworth", element: <Crew /> },
          { path: "glover", element: <Crew /> },
          { path: "ansari", element: <Crew /> },
        ],
      },
      {
        path: "/technology",
        element: <Technology />,
        children: [
          { path: "launch-vehicle", element: <Technology /> },
          { path: "spaceport", element: <Technology /> },
          { path: "space-capsule", element: <Technology /> },
        ],
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
