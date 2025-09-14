import React from "react";
import { logo } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="EasyBuy" className="w-40" />
      <div className="hidden sm:flex gap-4">
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
        <NavLink to="/" className="font-semibold">
          Product
        </NavLink>
        <NavLink to="/" className="font-semibold">
          Categories
        </NavLink>
        <NavLink to="/" className="font-semibold">
          Brands
        </NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <RiShoppingCart2Fill />
        <NavLink to="/" className="font-semibold">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
