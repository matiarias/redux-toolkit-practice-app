import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-start items-center gap-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center underline underline-offset-2 decoration-4 decoration-emerald-800 mt-8">
        Contacto
      </h1>

      <div className="container mx-auto mt-2 lg:mt-12 px-12">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
