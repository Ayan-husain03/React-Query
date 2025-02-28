import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="grid grid-cols-2 p-5 bg-indigo-600 place-items-center text-white">
      <div>
        <h1 className="text-[3rem]">Logo</h1>
        <p className="font-semibold">©️ Copyright @ayanhussain</p>
      </div>
      <div className="grid gap-5">
        <NavLink to="">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </footer>
  );
}

export default Footer;
