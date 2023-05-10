import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="h-auto sm:h-[100px] w-full bg-gradient-to-r from-teal-800 via-green-800 to-emerald-950 shadow-md shadow-amber-950">
        <div className="h-full w-full flex flex-col sm:flex-row justify-center md:justify-end items-center gap-12 px-16 py-4">
          <Link to={"/"}>
            <span className="text-gray-100 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-amber-800">
              Inicio
            </span>
          </Link>

          <Link to={"/about"}>
            <span className="text-gray-100 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-amber-800">
              Sobre Nosotros
            </span>
          </Link>

          <Link to={"contact"}>
            <span className="text-gray-100 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-amber-800">
              Contacto
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
