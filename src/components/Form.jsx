import React, { useState } from "react";

const Form = () => {
  const [first, setfirst] = useState();

  return (
    <form className="h-100 max-w-screen-md mx-auto flex flex-col justify-center items-center gap-8">
      <input
        className="w-full py-3 px-3 bg-green-800/10 text-lg lg:text-xl rounded-lg border-2 border-green-800 focus:outline-none placeholder:text-gray-800"
        type="text"
        id="name"
        placeholder="Nombre"
      />

      <input
        className="w-full py-3 px-3 bg-green-800/10 text-lg lg:text-xl rounded-lg border-2 border-green-800 focus:outline-none placeholder:text-gray-800"
        type="text"
        id="lastname"
        placeholder="Apellido"
      />

      <input
        className="w-full py-3 px-3 bg-green-800/10 text-lg lg:text-xl rounded-lg border-2 border-green-800 focus:outline-none placeholder:text-gray-800"
        type="email"
        id="email"
        placeholder="Email"
      />

      <button className="py-3 w-full bg-gradient-to-b from-amber-900 to-amber-600 text-gray-100 text-lg lg:text-xl font-bold rounded-lg shadow-md shadow-gray-500">
        Enviar
      </button>
    </form>
  );
};

export default Form;
