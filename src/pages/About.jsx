import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const aboutData = useSelector((state) => state.about);
  return (
    <div className="min-h-screen w-full">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black text-center underline underline-offset-2 decoration-4 decoration-emerald-800 my-12">
        Sobre Nosotros
      </h1>

      <div className="container mx-auto mb-8">
        <div className="h-auto flex flex-col justify-center items-center gap-8 text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-normal">
            {aboutData.title}
          </h2>

          <div className="max-w-screen-lg w-full">
            <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-gray-800 font-normal">
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
