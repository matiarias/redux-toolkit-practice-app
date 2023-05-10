import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl lg:text-6xl text-gray-800 font-bold text-center mt-8 underline underline-offset-2 decoration-4 decoration-emerald-800">
        Contacto
      </h1>

      <div className="container mx-auto mt-16 px-12">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
