import React, { useState } from "react";
import Nav from "./Nav";
import Materi from "./Materi";
import Checkout from "./Checkout";
import Fasility from "./Fasility";
import Ajakan from "./Ajakan";
import Footer from "../Footer";

function DetailProduct() {
  const [showMateri, setShowMateri] = useState(false);
  const [showFasility, setShowFasility] = useState(false);

  const toggleMateri = () => {
    setShowMateri(!showMateri);
    setShowFasility(false);
  };

  const toggleFasility = () => {
    setShowFasility(!showFasility);
    setShowMateri(false);
  };

  return (
    <>
      <Nav />
      <div className="bg-white w-full h-full flex">
        <Checkout onMateriClick={toggleMateri} onFasilityClick={toggleFasility} />
        <div className="container flex">
          {showMateri && <Materi />}
          {showFasility && <Fasility />}
        </div>
      </div>
      <Ajakan />
      <Footer />
    </>
  );
}

export default DetailProduct;
