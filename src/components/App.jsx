import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "routes/Home"
// import Nav from "components/Nav";

export default function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      {location.pathname === "/" ? <Home /> : <Outlet />}
    </>
  );
}
