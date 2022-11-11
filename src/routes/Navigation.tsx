import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";
import logo from "../assets/react.svg";
import { ShoppingPage } from "../02-components-patters/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt={logo} />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/shopping"
              >
                ShoppingPage
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/lazy2"
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/lazy3"
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/shopping" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
