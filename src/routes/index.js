import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Menu } from "../common/constants";
import { Home } from "../pages/home";

const routes = (
  <Routes>
    <Route path={Menu.LOGIN} element={<Navigate replace to={Menu.HOME} />} />
    <Route path={Menu.HOME} element={<Home />} />
    <Route path="*" element={<Navigate replace to={Menu.HOME} />} />
  </Routes>
);

export default routes