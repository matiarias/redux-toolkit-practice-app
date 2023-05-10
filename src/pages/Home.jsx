import React from "react";
import { useSelector } from "react-redux";

const Home = ({ handleClick }) => {
  const data = useSelector((state) => state.catsApi.data);

  const loading = useSelector((state) => state.catsApi.loading);

  return (
    <div className="min-h-screen w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center my-12">
        Disfruta de gatitos randoms para tu día
      </h1>

      {loading ? (
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
          Cargando...
        </h2>
      ) : (
        <div className="h-full w-full flex flex-col justify-start items-center gap-8 py-8 px-4">
          <div className="h-[600px] w-full md:h-[500px]  md:w-[600px] shadow-md shadow-green-800">
            <img
              className="h-full w-full object-cover object-center"
              src={data[0]?.url}
              alt="gatitos"
            />
          </div>

          <button
            onClick={handleClick}
            className="py-2 px-10 md:py-2 md:px-12 lg:px-16 bg-gradient-to-b from-green-800 to-emerald-600 text-gray-100 font-bold rounded-xl shadow-md shadow-emerald-950"
          >
            Gatito random
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
