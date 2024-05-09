import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-center">
            <NavLink to="/">
              <img src="/logo.svg" alt="cocktail db logo" className="logo" />
            </NavLink>
            <ul className="nav-links">
              <li>
                <NavLink className="nav-link" to="/">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  about
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
