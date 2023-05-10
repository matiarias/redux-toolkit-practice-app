import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { fetchCats } from "./redux/slice/catsData/catsSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios(
      "https://api.thecatapi.com/v1/images/search?api_key=live_qOo9CkEgXae2sQSBaJw3ZS2odY3t58Hr3j0QKrCk8Ziw3j4KYaUom6hBQH6WH9bl"
    );
    // console.log(response.data);
    dispatch(fetchCats(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
