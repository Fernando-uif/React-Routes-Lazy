import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages";
import logo from "../assets/react.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt={logo} />
          <ul>
            {routes.map(({ to, name }) => {
              return (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route path={path} element={<Component />} />
          ))}

          <Route path="/*" element={<Navigate to={routes[0].to} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
