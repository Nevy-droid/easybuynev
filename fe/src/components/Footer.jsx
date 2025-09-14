import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-stone-700 text-white  justify-center p-4 items-center">
      <div className="items-center flex flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col  gap-4">
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
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-4">
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
      </div>
      <div className="text-center mt-10">&copy; EasyBuy</div>
    </div>
  );
};

export default Footer;
