import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-indigo-600/80 p-5 sticky top-0 text-white text-xl font-bold flex justify-center">
      <nav className="space-x-20">
        <NavLink to="">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/infinite">Infinite</NavLink>
        <NavLink to="/filter">Filter</NavLink>
      </nav>
    </header>
  );
};
