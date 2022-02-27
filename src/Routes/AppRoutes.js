import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScrean from "../Screen/HomeScrean";
import AdminPanel from "../Screen/AdminPanel";
const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScrean />} />
      <Route path="/administrator" element={<AdminPanel />} />
    </Routes>
  );
};

export default appRoutes;
