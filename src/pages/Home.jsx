import React from "react";
import { useSelector } from "react-redux";

const Home = ({ fetchData }) => {
  const { data, loading } = useSelector((state) => state.catsApi);

  const title = useSelector((state) => state.catsApi.title);

  return (
    <>
      <div className="min-h-screen w-full px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center underline underline-offset-2 decoration-4 decoration-emerald-800 my-12">
          {title}
        </h1>

        {loading ? (
          <div className="h-[500px] w-full flex flex-col justify-center items-center text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Cargando...
            </h2>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col justify-start items-center gap-8 py-8 px-4">
            <div className="h-[600px] w-full md:h-[500px] md:w-[600px] xl:h-[600px] shadow-lg shadow-amber-900 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover object-center"
                src={data[0]?.url}
                alt="gatitos"
              />
            </div>

            <button
              onClick={fetchData}
              className="py-2 px-10 md:py-2 md:px-12 lg:px-16 xl:py-3 bg-gradient-to-b from-green-800 to-emerald-600 text-base md:text-lg xl:text-xl text-gray-100 font-bold rounded-xl shadow-md shadow-emerald-950"
            >
              Gatito random
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
