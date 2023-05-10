import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFormData } from "../redux/slice/form/formSlice";

const Form = () => {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getFormData({
        name: inputName,
        lastname: inputLastName,
        email: inputEmail,
      })
    );

    setInputName("");
    setInputLastName("");
    setInputEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-100 max-w-screen-sm mx-auto flex flex-col justify-center items-center gap-8"
    >
      <input
        className="w-full py-1 lg:py-2 px-3 bg-green-800/10 text-lg lg:text-xl rounded-lg border-2 border-green-800 focus:outline-none placeholder:text-gray-800"
        type="text"
        id="name"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        placeholder="Nombre"
        maxLength={50}
      />

      <input
        className="w-full py-1 lg:py-2 px-3 bg-green-800/10 text-lg lg:text-xl rounded-lg border-2 border-green-800 focus:outline-none placeholder:text-gray-800"
        type="text"
        id="lastname"
        value={inputLastName}
        onChange={(e) => {
          setInputLastName(e.target.value);
        }}
        placeholder="Apellido"
        maxLength={50}
      />

      <input
        className="w-full py-1 lg:py-2 px-3 bg-green-800/10 text-lg lg:text-xl rounded-lg border-2 border-green-800 focus:outline-none placeholder:text-gray-800"
        type="email"
        id="email"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        placeholder="Email"
        maxLength={70}
      />

      <button
        type="submit"
        className="py-1 lg:py-2 w-full bg-gradient-to-b from-amber-900 to-amber-600 text-gray-100 text-lg lg:text-xl font-bold rounded-lg shadow-md shadow-gray-500"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
