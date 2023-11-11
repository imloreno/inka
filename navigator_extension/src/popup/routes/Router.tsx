import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../pages";

export const routes = [
  {
    path: "/",
    label: "Build",
  },
  {
    path: "/history",
    label: "History",
  },
  {
    path: "/settings",
    label: "Settings",
  },
];

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/history" element={<p>History</p>} />
      <Route path="/settings" element={<p>Settings</p>} />
      <Route path="/login" element={<p>Settings</p>} />
    </Routes>
  );
};

export default Router;
