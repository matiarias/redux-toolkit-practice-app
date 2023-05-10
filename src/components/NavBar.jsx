import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="h-[100px] w-full bg-gradient-to-r from-teal-800 via-green-800 to-emerald-950 shadow-md shadow-amber-950">
        <div className="h-full w-full flex justify-end items-center gap-12 px-16 py-4">
          <Link to={"/"}>
            <span className="text-gray-100 text-xl xl:text-2xl 2xl:text-3xl font-bold hover:text-amber-800">
              Inicio
            </span>
          </Link>

          <Link to={"/about"}>
            <span className="text-gray-100 text-xl xl:text-2xl 2xl:text-3xl font-bold hover:text-amber-800">
              Sobre mi
            </span>
          </Link>

          <Link to={"contact"}>
            <span className="text-gray-100 text-xl xl:text-2xl 2xl:text-3xl font-bold hover:text-amber-800">
              Contacto
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
