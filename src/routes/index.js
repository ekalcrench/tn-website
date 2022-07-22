import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Menu } from "../common/constants";
import { GensetMonitoring } from "../pages/genset-monitoring";

const routes = (
  <Routes>
    <Route path={Menu.HOME} element={<GensetMonitoring />} />
    <Route path="*" element={<Navigate replace to={Menu.HOME} />} />
  </Routes>
);

export default routes;
